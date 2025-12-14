import joplin from 'api';
import { SettingItemType } from 'api/types';

export async function registerSettings() {
  await joplin.settings.registerSection('sap', {
    label: 'Customize Joplin UI',
    iconName: 'fas fa-palette',
  });

  await joplin.settings.registerSettings({

    /* ======================================================
       H1 – TITRE DU PLUGIN
       ====================================================== */

    ui_h1_top: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '════════════════════════════════════════',
    },

    ui_h1_title: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'CUSTOMIZE JOPLIN UI',
    },

    ui_h1_bottom: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '════════════════════════════════════════',
    },

    ui_h1_spacer: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '',
    },

    /* ======================================================
       SECTION – CARNETS (SIDEBAR)
       ====================================================== */

    ui_nb_title: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'CARNETS (SIDEBAR)',
    },

    ui_nb_sep: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '────────────────────────────────────────',
    },

    nb_bg: {
      value: '#1e1e1e',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Background de l’arborescence',
    },

    nb_item_height: {
      value: 28,
      type: SettingItemType.Int,
      section: 'sap',
      public: true,
      label: 'Hauteur des items (px)',
      minimum: 20,
      maximum: 48,
    },

    nb_indent: {
      value: 14,
      type: SettingItemType.Int,
      section: 'sap',
      public: true,
      label: 'Indentation par niveau (px)',
      minimum: 0,
      maximum: 40,
    },

    nb_pad_y: {
      value: 2,
      type: SettingItemType.Int,
      section: 'sap',
      public: true,
      label: 'Padding vertical interne (px)',
      minimum: 0,
      maximum: 12,
    },

    nb_font_size: {
      value: 12,
      type: SettingItemType.Int,
      section: 'sap',
      public: true,
      label: 'Taille de la police (px)',
      minimum: 10,
      maximum: 18,
    },

    nb_root_bold: {
      value: true,
      type: SettingItemType.Bool,
      section: 'sap',
      public: true,
      label: 'Carnets racine en gras',
    },

    nb_root_case: {
      value: 'uppercase',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Casse carnets racine (none / uppercase / capitalize)',
    },

    nb_child_bold: {
      value: false,
      type: SettingItemType.Bool,
      section: 'sap',
      public: true,
      label: 'Carnets enfants en gras',
    },

    nb_child_case: {
      value: 'none',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Casse carnets enfants (none / uppercase / capitalize)',
    },

    nb_title_color: {
      value: '#d4d4d4',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Couleur des titres',
    },

    nb_sel_bg: {
      value: '#2a2a2a',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Background du carnet sélectionné',
    },

    nb_sel_title_color: {
      value: '#99cc66',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Couleur du titre sélectionné',
    },

    ui_nb_spacer: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '',
    },

    /* ======================================================
       SECTION – LISTE DES NOTES
       ====================================================== */

    ui_nl_title: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'LISTE DES NOTES',
    },

    ui_nl_sep: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '────────────────────────────────────────',
    },

    nl_bg: {
      value: '#1e1e1e',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Background de la liste',
    },

    nl_item_height: {
      value: 28,
      type: SettingItemType.Int,
      section: 'sap',
      public: true,
      label: 'Hauteur des items (px)',
      minimum: 20,
      maximum: 48,
    },

    nl_pad_y: {
      value: 2,
      type: SettingItemType.Int,
      section: 'sap',
      public: true,
      label: 'Padding vertical interne (px)',
      minimum: 0,
      maximum: 12,
    },

    nl_font_size: {
      value: 12,
      type: SettingItemType.Int,
      section: 'sap',
      public: true,
      label: 'Taille de la police (px)',
      minimum: 10,
      maximum: 18,
    },

    nl_title_color: {
      value: '#d4d4d4',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Couleur des titres',
    },

    nl_sel_bg: {
      value: '#2a2a2a',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Background de la note sélectionnée',
    },

    nl_sel_title_color: {
      value: '#99cc66',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Couleur du titre sélectionné',
    },

    ui_nl_spacer: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '',
    },

    /* ======================================================
       SECTION – ÉDITEUR
       ====================================================== */

    ui_ed_title: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'ÉDITEUR',
    },

    ui_ed_sep: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '────────────────────────────────────────',
    },

    ed_tb_wrap: {
      value: 'ellipsis',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Disposition toolbar (ellipsis / wrap)',
    },

    ed_tb_bg: {
      value: '#1e1e1e',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Background de la toolbar',
    },

    ed_tb_icon: {
      value: '#d4d4d4',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Couleur des icônes',
    },

    ui_ed_spacer: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '',
    },

    /* ======================================================
       SECTION – MARKDOWN RENDU
       ====================================================== */

    ui_md_title: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'MARKDOWN RENDU',
    },

    ui_md_sep: {
      value: '',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: '────────────────────────────────────────',
    },

    md_font_family: {
      value: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Police de base',
    },

    md_font_size: {
      value: 14,
      type: SettingItemType.Int,
      section: 'sap',
      public: true,
      label: 'Taille de base (px)',
      minimum: 10,
      maximum: 22,
    },

    md_h_color: {
      value: '#e6e6e6',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Couleur des titres H1–H6',
    },

    md_h_bg: {
      value: 'transparent',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Background des titres H1–H6',
    },

    md_h_case: {
      value: 'none',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Casse des titres (none / uppercase / capitalize)',
    },

    md_h_border_color: {
      value: '#3a3a3a',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Couleur de la bordure des titres',
    },

    md_h_border_width: {
      value: 0,
      type: SettingItemType.Int,
      section: 'sap',
      public: true,
      label: 'Épaisseur de la bordure (px)',
      minimum: 0,
      maximum: 8,
    },

    md_h_border_style: {
      value: 'solid',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Style de la bordure',
    },

    md_h_border_side: {
      value: 'left',
      type: SettingItemType.String,
      section: 'sap',
      public: true,
      label: 'Côté de la bordure (left / bottom / none)',
    },

  });
}
