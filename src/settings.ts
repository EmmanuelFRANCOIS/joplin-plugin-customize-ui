import joplin from 'api';
import { SettingItemType } from 'api/types';

export async function registerSettings() {

  /* =====================================================
     SECTION 1 – NOTEBOOK TREE
     ===================================================== */

  await joplin.settings.registerSection('ui_notebooks', {
    label: 'Customize UI – Notebook tree',
    iconName: 'fas fa-sitemap',
  });

  await joplin.settings.registerSettings({
    nb_bg: {
      value: '#1e1e1e',
      type: SettingItemType.String,
      section: 'ui_notebooks',
      public: true,
      label: 'Background color',
    },
    nb_item_height: {
      value: 28,
      type: SettingItemType.Int,
      section: 'ui_notebooks',
      public: true,
      label: 'Item height (px)',
      minimum: 20,
      maximum: 48,
    },
    nb_indent: {
      value: 14,
      type: SettingItemType.Int,
      section: 'ui_notebooks',
      public: true,
      label: 'Indent per level (px)',
      minimum: 0,
      maximum: 40,
    },
    nb_pad_y: {
      value: 2,
      type: SettingItemType.Int,
      section: 'ui_notebooks',
      public: true,
      label: 'Vertical padding (px)',
      minimum: 0,
      maximum: 12,
    },
    nb_font_size: {
      value: 12,
      type: SettingItemType.Int,
      section: 'ui_notebooks',
      public: true,
      label: 'Font size (px)',
      minimum: 10,
      maximum: 18,
    },
    nb_root_bold: {
      value: true,
      type: SettingItemType.Bool,
      section: 'ui_notebooks',
      public: true,
      label: 'Root notebooks in bold',
    },
    nb_root_case: {
      value: 'uppercase',
      type: SettingItemType.String,
      section: 'ui_notebooks',
      public: true,
      label: 'Root notebooks case (none / uppercase / capitalize)',
    },
    nb_child_bold: {
      value: false,
      type: SettingItemType.Bool,
      section: 'ui_notebooks',
      public: true,
      label: 'Child notebooks in bold',
    },
    nb_child_case: {
      value: 'none',
      type: SettingItemType.String,
      section: 'ui_notebooks',
      public: true,
      label: 'Child notebooks case (none / uppercase / capitalize)',
    },
    nb_title_color: {
      value: '#d4d4d4',
      type: SettingItemType.String,
      section: 'ui_notebooks',
      public: true,
      label: 'Title color',
    },
    nb_sel_bg: {
      value: '#2a2a2a',
      type: SettingItemType.String,
      section: 'ui_notebooks',
      public: true,
      label: 'Selected background color',
    },
    nb_sel_title_color: {
      value: '#99cc66',
      type: SettingItemType.String,
      section: 'ui_notebooks',
      public: true,
      label: 'Selected title color',
    },
  });

  /* =====================================================
     SECTION 2 – NOTES LIST
     ===================================================== */

  await joplin.settings.registerSection('ui_notes_list', {
    label: 'Customize UI – Notes list',
    iconName: 'fas fa-list',
  });

  await joplin.settings.registerSettings({
    nl_bg: {
      value: '#1e1e1e',
      type: SettingItemType.String,
      section: 'ui_notes_list',
      public: true,
      label: 'Background color',
    },
    nl_item_height: {
      value: 28,
      type: SettingItemType.Int,
      section: 'ui_notes_list',
      public: true,
      label: 'Item height (px)',
      minimum: 20,
      maximum: 48,
    },
    nl_pad_y: {
      value: 2,
      type: SettingItemType.Int,
      section: 'ui_notes_list',
      public: true,
      label: 'Vertical padding (px)',
      minimum: 0,
      maximum: 12,
    },
    nl_font_size: {
      value: 12,
      type: SettingItemType.Int,
      section: 'ui_notes_list',
      public: true,
      label: 'Font size (px)',
      minimum: 10,
      maximum: 18,
    },
    nl_title_color: {
      value: '#d4d4d4',
      type: SettingItemType.String,
      section: 'ui_notes_list',
      public: true,
      label: 'Title color',
    },
    nl_sel_bg: {
      value: '#2a2a2a',
      type: SettingItemType.String,
      section: 'ui_notes_list',
      public: true,
      label: 'Selected background color',
    },
    nl_sel_title_color: {
      value: '#99cc66',
      type: SettingItemType.String,
      section: 'ui_notes_list',
      public: true,
      label: 'Selected title color',
    },
  });

  /* =====================================================
     SECTION 3 – EDITOR
     ===================================================== */

  await joplin.settings.registerSection('ui_editor', {
    label: 'Customize UI – Editor',
    iconName: 'fas fa-edit',
  });

  await joplin.settings.registerSettings({
    ed_tb_wrap: {
      value: 'ellipsis',
      type: SettingItemType.String,
      section: 'ui_editor',
      public: true,
      label: 'Toolbar layout (ellipsis / wrap)',
    },
    ed_tb_bg: {
      value: '#1e1e1e',
      type: SettingItemType.String,
      section: 'ui_editor',
      public: true,
      label: 'Toolbar background color',
    },
    ed_tb_icon: {
      value: '#d4d4d4',
      type: SettingItemType.String,
      section: 'ui_editor',
      public: true,
      label: 'Toolbar icon color',
    },
  });

  /* =====================================================
     SECTION 4 – NOTE CONTENT (MARKDOWN RENDER)
     ===================================================== */

  await joplin.settings.registerSection('ui_note_content', {
    label: 'Customize UI – Note content',
    iconName: 'fas fa-file-alt',
  });

  await joplin.settings.registerSettings({
    md_font_family: {
      value: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      type: SettingItemType.String,
      section: 'ui_note_content',
      public: true,
      label: 'Base font family',
    },
    md_font_size: {
      value: 14,
      type: SettingItemType.Int,
      section: 'ui_note_content',
      public: true,
      label: 'Base font size (px)',
      minimum: 10,
      maximum: 22,
    },
    md_h_color: {
      value: '#e6e6e6',
      type: SettingItemType.String,
      section: 'ui_note_content',
      public: true,
      label: 'Headings color (H1–H6)',
    },
    md_h_bg: {
      value: 'transparent',
      type: SettingItemType.String,
      section: 'ui_note_content',
      public: true,
      label: 'Headings background',
    },
    md_h_case: {
      value: 'none',
      type: SettingItemType.String,
      section: 'ui_note_content',
      public: true,
      label: 'Headings case (none / uppercase / capitalize)',
    },
    md_h_border_color: {
      value: '#3a3a3a',
      type: SettingItemType.String,
      section: 'ui_note_content',
      public: true,
      label: 'Headings border color',
    },
    md_h_border_width: {
      value: 0,
      type: SettingItemType.Int,
      section: 'ui_note_content',
      public: true,
      label: 'Headings border width (px)',
      minimum: 0,
      maximum: 8,
    },
    md_h_border_style: {
      value: 'solid',
      type: SettingItemType.String,
      section: 'ui_note_content',
      public: true,
      label: 'Headings border style',
    },
    md_h_border_side: {
      value: 'left',
      type: SettingItemType.String,
      section: 'ui_note_content',
      public: true,
      label: 'Headings border side (left / bottom / none)',
    },
  });
}
