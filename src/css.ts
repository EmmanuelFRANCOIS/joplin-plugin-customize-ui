import joplin from 'api';

export async function buildCss(): Promise<string> {
  const v = async (k: string) => await joplin.settings.value(k);

  /* =====================================================
     NOTEBOOK TREE
     ===================================================== */

  const nb_bg = await v('nb_bg');
  const nb_item_height = await v('nb_item_height');
  const nb_indent = await v('nb_indent');
  const nb_pad_y = await v('nb_pad_y');
  const nb_font_size = await v('nb_font_size');
  const nb_root_bold = await v('nb_root_bold');
  const nb_root_case = await v('nb_root_case');
  const nb_child_bold = await v('nb_child_bold');
  const nb_child_case = await v('nb_child_case');
  const nb_title_color = await v('nb_title_color');
  const nb_sel_bg = await v('nb_sel_bg');
  const nb_sel_title_color = await v('nb_sel_title_color');

  /* =====================================================
     NOTES LIST
     ===================================================== */

  const nl_bg = await v('nl_bg');
  const nl_item_height = await v('nl_item_height');
  const nl_pad_y = await v('nl_pad_y');
  const nl_font_size = await v('nl_font_size');
  const nl_title_color = await v('nl_title_color');
  const nl_sel_bg = await v('nl_sel_bg');
  const nl_sel_title_color = await v('nl_sel_title_color');

  /* =====================================================
     EDITOR
     ===================================================== */

  const ed_tb_wrap = await v('ed_tb_wrap');
  const ed_tb_bg = await v('ed_tb_bg');
  const ed_tb_icon = await v('ed_tb_icon');

  /* =====================================================
     NOTE CONTENT
     ===================================================== */

  const md_font_family = await v('md_font_family');
  const md_font_size = await v('md_font_size');
  const md_h_color = await v('md_h_color');
  const md_h_bg = await v('md_h_bg');
  const md_h_case = await v('md_h_case');
  const md_h_border_color = await v('md_h_border_color');
  const md_h_border_width = await v('md_h_border_width');
  const md_h_border_style = await v('md_h_border_style');
  const md_h_border_side = await v('md_h_border_side');

  let css = '';

  /* =====================================================
     NOTEBOOK TREE (sidebar)
     ===================================================== */

  css += `
/* Notebook tree */
.sidebar .item-list {
  background: ${nb_bg} !important;
}

.sidebar .list-item-container {
  min-height: ${nb_item_height}px !important;
  padding-top: ${nb_pad_y}px !important;
  padding-bottom: ${nb_pad_y}px !important;
  font-size: ${nb_font_size}px !important;
  color: ${nb_title_color} !important;
}

/* Indentation */
.sidebar .list-item-container {
  padding-left: calc(var(--depth) * ${nb_indent}px) !important;
}

/* Root notebooks */
.sidebar .list-item-depth-0 .title {
  font-weight: ${nb_root_bold ? 'bold' : 'normal'} !important;
  text-transform: ${nb_root_case} !important;
}

/* Child notebooks */
.sidebar .list-item-container:not(.list-item-depth-0) .title {
  font-weight: ${nb_child_bold ? 'bold' : 'normal'} !important;
  text-transform: ${nb_child_case} !important;
}

/* Selected notebook */
.sidebar .list-item-container.selected {
  background: ${nb_sel_bg} !important;
}

.sidebar .list-item-container.selected .title {
  color: ${nb_sel_title_color} !important;
}
`;

  /* =====================================================
     NOTES LIST
     ===================================================== */

  css += `
/* Notes list */
.item-list.note-list {
  background: ${nl_bg} !important;
}

.item-list.note-list .list-item-container {
  min-height: ${nl_item_height}px !important;
  padding-top: ${nl_pad_y}px !important;
  padding-bottom: ${nl_pad_y}px !important;
  font-size: ${nl_font_size}px !important;
  color: ${nl_title_color} !important;
}

.item-list.note-list .list-item-container.selected {
  background: ${nl_sel_bg} !important;
}

.item-list.note-list .list-item-container.selected .title {
  color: ${nl_sel_title_color} !important;
}
`;

  /* =====================================================
     EDITOR TOOLBAR
     ===================================================== */

  css += `
/* Editor toolbar */
.editor-toolbar {
  background: ${ed_tb_bg} !important;
  flex-wrap: ${ed_tb_wrap === 'wrap' ? 'wrap' : 'nowrap'} !important;
}

.editor-toolbar button i {
  color: ${ed_tb_icon} !important;
}
`;

  /* =====================================================
     NOTE CONTENT (rendered markdown)
     ===================================================== */

  const borderSide =
    md_h_border_side === 'left'
      ? 'border-left'
      : md_h_border_side === 'bottom'
      ? 'border-bottom'
      : null;

  css += `
/* Markdown content */
.rendered-md {
  font-family: ${md_font_family} !important;
  font-size: ${md_font_size}px !important;
}

.rendered-md h1,
.rendered-md h2,
.rendered-md h3,
.rendered-md h4,
.rendered-md h5,
.rendered-md h6 {
  color: ${md_h_color} !important;
  background: ${md_h_bg} !important;
  text-transform: ${md_h_case} !important;
  ${
    borderSide
      ? `${borderSide}: ${md_h_border_width}px ${md_h_border_style} ${md_h_border_color} !important;`
      : ''
  }
}
`;

  return css;
}
