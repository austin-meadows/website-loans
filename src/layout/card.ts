import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import COLOR from "../utils/js/color";

import STYLE from "./card.scss";
import NAME from "./card.scss.json";

export enum ALIGNMENT {
  "CENTER" = "_center",
}
export enum TYPE {
  "TACTILE" = "_tactile",
  "FLAT" = "_flat",
}
@customElement("l-card")
export default class Card extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly alignment: ALIGNMENT | null =
    null;

  @property({ type: String }) private readonly color: COLOR | null = null;

  @property({ type: String }) private readonly type: TYPE | null = TYPE.TACTILE;

  @property({ type: Object }) private readonly icon = { icon: [] };

  // Could accept array of icons and randomly / stagger them
  protected renderBackground(icon = [0, 0, null, ""]): TemplateResult | null {
    if (!icon[4]) {
      return null;
    }

    const result: Array<TemplateResult> = [];
    const bgIcon = html`
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 ${icon[0]} ${icon[1]}"
      >
        <path fill="currentColor" d="${icon[4]}"></path>
      </svg>
    `;
    for (let i = 0; i < 6 * 5; i += 1) {
      result.push(bgIcon);
    }

    return html`<div class="${NAME.background}">${result}</div> `;
  }

  protected render() {
    const color: string = this.color ? ` ${NAME[this.color]}` : "";
    const alignment: string = this.alignment ? ` ${NAME[this.alignment]}` : "";
    const type: string = this.type ? ` ${NAME[this.type]}` : "";

    return html`
      <div class="${NAME.container}${color}${alignment}${type}">
        <div class="${NAME.content}">
          <slot></slot>
        </div>
        ${this.renderBackground(this.icon.icon)}
      </div>
    `;
  }
}
