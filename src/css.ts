
type TextCase = 'none' | 'uppercase' | 'capitalize';

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const s = (v: any, fb: string) => (typeof v === 'string' && v.trim() ? v.trim() : fb);

function textCase(v: any, fb: TextCase): TextCase {
  return v === 'uppercase' || v === 'capitalize' || v === 'none' ? v : fb;
}

export function buildChromeCss(raw: Record<string, any>): string {
  const nbFont = clamp(raw.nb_font_size ?? 12, 10, 18);
  const nbPadY = clamp(raw.nb_pad_y ?? 2, 0, 12);
  const nbItemH = Math.max(
    clamp(raw.nb_item_height ?? 28, 20, 48),
    nbFont + nbPadY * 2 + 6
  );

  const nlFont = clamp(raw.nl_font_size ?? 12, 10, 18);
  const nlPadY = clamp(raw.nl_pad_y ?? 2, 0, 12);
  const nlItemH = Math.max(
    clamp(raw.nl_item_height ?? 28, 20, 48),
    nlFont + nlPadY * 2 + 6
  );

  return `
/* =========================
   Sidebar – Carnets
   ========================= */

.sidebar-list-items-wrapper{
  background:${s(raw.nb_bg, '#1e1e1e')} !important;
}

.sidebar-list-items-wrapper .list-item-container{
  height:${nbItemH}px !important;
  padding:${nbPadY}px 6px !important;
}

.sidebar-list-items-wrapper .list-item-wrapper{
  padding-left:calc(var(--depth,1) * ${clamp(raw.nb_indent ?? 14, 0, 40)}px) !important;
}

.sidebar-list-items-wrapper .title{
  font-size:${nbFont}px !important;
  color:${s(raw.nb_title_color, '#d4d4d4')} !important;
}

.sidebar-list-items-wrapper .list-item-container[aria-level="2"] .title{
  font-weight:${raw.nb_root_bold ? 700 : 400} !important;
  text-transform:${textCase(raw.nb_root_case, 'uppercase')} !important;
}

.sidebar-list-items-wrapper .list-item-container:not([aria-level="2"]) .title{
  font-weight:${raw.nb_child_bold ? 700 : 400} !important;
  text-transform:${textCase(raw.nb_child_case, 'none')} !important;
}

.sidebar-list-items-wrapper .list-item-container.selected{
  background:${s(raw.nb_sel_bg, '#2a2a2a')} !important;
}
.sidebar-list-items-wrapper .list-item-container.selected .title{
  color:${s(raw.nb_sel_title_color, '#99cc66')} !important;
}

/* =========================
   Liste – Notes
   ========================= */

.item-list.note-list{
  background:${s(raw.nl_bg, '#1e1e1e')} !important;
}

.item-list.note-list .list-item-container{
  height:${nlItemH}px !important;
  padding:${nlPadY}px 8px !important;
}

.item-list.note-list .title{
  font-size:${nlFont}px !important;
  color:${s(raw.nl_title_color, '#d4d4d4')} !important;
}

.item-list.note-list .list-item-container.selected{
  background:${s(raw.nl_sel_bg, '#2a2a2a')} !important;
}
.item-list.note-list .list-item-container.selected .title{
  color:${s(raw.nl_sel_title_color, '#99cc66')} !important;
}

/* =========================
   Toolbar éditeur
   ========================= */

.editor-toolbar{
  background:${s(raw.ed_tb_bg, '#1e1e1e')} !important;
  flex-wrap:${raw.ed_tb_wrap === 'wrap' ? 'wrap' : 'nowrap'} !important;
}

.editor-toolbar button i,
.editor-toolbar button svg{
  color:${s(raw.ed_tb_icon, '#d4d4d4')} !important;
  fill:${s(raw.ed_tb_icon, '#d4d4d4')} !important;
}
`;
}

export function buildNoteCss(raw: Record<string, any>): string {
  const border =
    raw.md_h_border_width > 0 && raw.md_h_border_side !== 'none'
      ? raw.md_h_border_side === 'bottom'
        ? `border-bottom:${raw.md_h_border_width}px ${raw.md_h_border_style} ${s(raw.md_h_border_color,'#3a3a3a')};padding-bottom:6px;`
        : `border-left:${raw.md_h_border_width}px ${raw.md_h_border_style} ${s(raw.md_h_border_color,'#3a3a3a')};padding-left:10px;`
      : '';

  return `
.rendered-md{
  font-family:${s(raw.md_font_family,'system-ui')} !important;
  font-size:${clamp(raw.md_font_size ?? 14, 10, 22)}px !important;
}

.rendered-md h1,.rendered-md h2,.rendered-md h3,
.rendered-md h4,.rendered-md h5,.rendered-md h6{
  color:${s(raw.md_h_color,'#e6e6e6')} !important;
  background:${s(raw.md_h_bg,'transparent')} !important;
  text-transform:${textCase(raw.md_h_case,'none')} !important;
  ${border}
}
`;
}
