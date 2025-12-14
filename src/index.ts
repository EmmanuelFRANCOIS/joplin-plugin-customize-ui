import joplin from 'api';
import { registerSettings } from './settings';
import { buildCss } from './css';
import * as fs from 'fs';
import * as path from 'path';

let applyTimer: NodeJS.Timeout | null = null;

async function applyCssNow() {
  const css = await buildCss();
  const dataDir = await joplin.plugins.dataDir();

  const chromeCssPath = path.join(dataDir, 'customize-ui.chrome.css');
  const noteCssPath = path.join(dataDir, 'customize-ui.note.css');

  await fs.promises.writeFile(chromeCssPath, css, 'utf8');
  await fs.promises.writeFile(noteCssPath, css, 'utf8');

  // UI (sidebar, notes list, editor toolbar, etc.)
  await joplin.window.loadChromeCssFile(chromeCssPath);

  // Note viewer / rendered markdown (si ton CSS cible .rendered-md, etc.)
  await joplin.window.loadNoteCssFile(noteCssPath);
}

/**
 * Débounce pour éviter de réécrire/recharger le CSS en rafale
 * quand plusieurs settings changent rapidement.
 */
function scheduleApplyCss(delayMs = 80) {
  if (applyTimer) clearTimeout(applyTimer);
  applyTimer = setTimeout(() => {
    applyTimer = null;
    void applyCssNow();
  }, delayMs);
}

joplin.plugins.register({
  onStart: async () => {
    await registerSettings();

    // Injection initiale
    await applyCssNow();

    // Quand un setting change
    await joplin.settings.onChange(() => {
      scheduleApplyCss(80);
    });

    // Quand la note sélectionnée change (l’éditeur peut être remonté / rerender)
    await joplin.workspace.onNoteSelectionChange(() => {
      scheduleApplyCss(80);
    });

    // Quand le contenu de la note change (utile si tu styles aussi le rendu/éditeur)
    await joplin.workspace.onNoteChange(() => {
      scheduleApplyCss(120);
    });
  },
});
