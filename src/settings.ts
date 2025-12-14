
import joplin from 'api';
import { SettingItemType } from 'api/types';

export type TextCase = 'none' | 'uppercase' | 'capitalize';

export async function registerSettings() {
  await joplin.settings.registerSection('sap_notebooks', {
    label: 'Customize UI - Notebooks tree',
    iconName: 'fas fa-palette',
  });

  await joplin.settings.registerSection('sap_notes', {
    label: 'Customize UI - Notes list',
    iconName: 'fas fa-palette',
  });

  await joplin.settings.registerSection('sap_editor', {
    label: 'Customize UI - Editor',
    iconName: 'fas fa-palette',
  });

  await joplin.settings.registerSection('sap_markdown', {
    label: 'Customize UI - Note content',
    iconName: 'fas fa-palette',
  });

  await joplin.settings.registerSettings({
    /* =========================
       Carnets
       ========================= */
    nb_bg: { value: '#1e1e1e', type: SettingItemType.String, section: 'sap_notebooks', public: true, label: 'Background arborescence' },
    nb_item_height: { value: 28, type: SettingItemType.Int, section: 'sap_notebooks', public: true, label: 'Hauteur item (px)', minimum: 20, maximum: 48 },
    nb_indent: { value: 14, type: SettingItemType.Int, section: 'sap_notebooks', public: true, label: 'Indentation par niveau (px)', minimum: 0, maximum: 40 },
    nb_pad_y: { value: 2, type: SettingItemType.Int, section: 'sap_notebooks', public: true, label: 'Padding vertical interne (px)', minimum: 0, maximum: 12 },
    nb_font_size: { value: 12, type: SettingItemType.Int, section: 'sap_notebooks', public: true, label: 'Taille police titres (px)', minimum: 10, maximum: 18 },
    nb_root_bold: { value: true, type: SettingItemType.Bool, section: 'sap_notebooks', public: true, label: 'Roots en gras' },
    nb_root_case: { value: 'uppercase', type: SettingItemType.String, section: 'sap_notebooks', public: true, label: 'Casse roots (none / uppercase / capitalize)' },
    nb_child_bold: { value: false, type: SettingItemType.Bool, section: 'sap_notebooks', public: true, label: 'Childs en gras' },
    nb_child_case: { value: 'none', type: SettingItemType.String, section: 'sap_notebooks', public: true, label: 'Casse childs (none / uppercase / capitalize)' },
    nb_title_color: { value: '#d4d4d4', type: SettingItemType.String, section: 'sap_notebooks', public: true, label: 'Couleur titres' },
    nb_sel_bg: { value: '#2a2a2a', type: SettingItemType.String, section: 'sap_notebooks', public: true, label: 'Background sélection' },
    nb_sel_title_color: { value: '#99cc66', type: SettingItemType.String, section: 'sap_notebooks', public: true, label: 'Couleur titre sélectionné' },

    /* =========================
       Notes
       ========================= */
    nl_bg: { value: '#1e1e1e', type: SettingItemType.String, section: 'sap_notes', public: true, label: 'Background liste' },
    nl_item_height: { value: 28, type: SettingItemType.Int, section: 'sap_notes', public: true, label: 'Hauteur item (px)', minimum: 20, maximum: 48 },
    nl_pad_y: { value: 2, type: SettingItemType.Int, section: 'sap_notes', public: true, label: 'Padding vertical interne (px)', minimum: 0, maximum: 12 },
    nl_font_size: { value: 12, type: SettingItemType.Int, section: 'sap_notes', public: true, label: 'Taille police titres (px)', minimum: 10, maximum: 18 },
    nl_title_color: { value: '#d4d4d4', type: SettingItemType.String, section: 'sap_notes', public: true, label: 'Couleur titres' },
    nl_sel_bg: { value: '#2a2a2a', type: SettingItemType.String, section: 'sap_notes', public: true, label: 'Background sélection' },
    nl_sel_title_color: { value: '#99cc66', type: SettingItemType.String, section: 'sap_notes', public: true, label: 'Couleur titre sélectionné' },

    /* =========================
       Toolbar éditeur
       ========================= */
    ed_tb_wrap: { value: 'ellipsis', type: SettingItemType.String, section: 'sap_editor', public: true, label: 'Disposition toolbar (ellipsis / wrap)' },
    ed_tb_bg: { value: '#1e1e1e', type: SettingItemType.String, section: 'sap_editor', public: true, label: 'Background toolbar' },
    ed_tb_icon: { value: '#d4d4d4', type: SettingItemType.String, section: 'sap_editor', public: true, label: 'Couleur icônes' },

    /* =========================
       Markdown rendu
       ========================= */
    md_font_family: { value: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', type: SettingItemType.String, section: 'sap_markdown', public: true, label: 'Police de base' },
    md_font_size: { value: 14, type: SettingItemType.Int, section: 'sap_markdown', public: true, label: 'Taille de base (px)', minimum: 10, maximum: 22 },
    md_h_color: { value: '#e6e6e6', type: SettingItemType.String, section: 'sap_markdown', public: true, label: 'Couleur titres H1–H6' },
    md_h_bg: { value: 'transparent', type: SettingItemType.String, section: 'sap_markdown', public: true, label: 'Background titres H1–H6' },
    md_h_case: { value: 'none', type: SettingItemType.String, section: 'sap_markdown', public: true, label: 'Casse titres (none / uppercase / capitalize)' },
    md_h_border_color: { value: '#3a3a3a', type: SettingItemType.String, section: 'sap_markdown', public: true, label: 'Couleur bordure titres' },
    md_h_border_width: { value: 0, type: SettingItemType.Int, section: 'sap_markdown', public: true, label: 'Épaisseur bordure (px)', minimum: 0, maximum: 8 },
    md_h_border_style: { value: 'solid', type: SettingItemType.String, section: 'sap_markdown', public: true, label: 'Style bordure' },
    md_h_border_side: { value: 'left', type: SettingItemType.String, section: 'sap_markdown', public: true, label: 'Côté bordure (left / bottom / none)' },
  });
}