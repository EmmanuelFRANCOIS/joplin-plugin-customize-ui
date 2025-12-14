import joplin from 'api';
import { registerSettings } from './settings';
import { buildChromeCss, buildNoteCss } from './css';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Liste explicite des settings gérés par le plugin
 * (obligatoire : l’API ne fournit pas settings.keys())
 */
const SETTINGS_KEYS = [
  // Carnets
  'nb_bg',
  'nb_item_height',
  'nb_indent',
  'nb_pad_y',
  'nb_font_size',
  'nb_root_bold',
  'nb_root_case',
  'nb_child_bold',
  'nb_child_case',
  'nb_title_color',
  'nb_sel_bg',
  'nb_sel_title_color',

  // Notes
  'nl_bg',
  'nl_item_height',
  'nl_pad_y',
  'nl_font_size',
  'nl_title_color',
  'nl_sel_bg',
  'nl_sel_title_color',

  // Toolbar éditeur
  'ed_tb_wrap',
  'ed_tb_bg',
  'ed_tb_icon',

  // Markdown rendu
  'md_font_family',
  'md_font_size',
  'md_h_color',
  'md_h_bg',
  'md_h_case',
  'md_h_border_color',
  'md_h_border_width',
  'md_h_border_style',
  'md_h_border_side',
];

async function applyCss() {
  const values = await joplin.settings.values(SETTINGS_KEYS);

  const dataDir = await joplin.plugins.dataDir();
  const chromePath = path.join(dataDir, 'sap.chrome.css');
  const notePath = path.join(dataDir, 'sap.note.css');

  await fs.promises.writeFile(
    chromePath,
    buildChromeCss(values),
    'utf8'
  );

  await fs.promises.writeFile(
    notePath,
    buildNoteCss(values),
    'utf8'
  );

  await joplin.window.loadChromeCssFile(chromePath);
  await joplin.window.loadNoteCssFile(notePath);
}

joplin.plugins.register({
  onStart: async () => {
    await registerSettings();
    await applyCss();

    joplin.settings.onChange(async () => {
      await applyCss();
    });
  },
});