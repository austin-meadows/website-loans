import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import COLOR from "../utils/js/color";

import STYLE from "./card.scss";
import NAME from "./card.scss.json";

export enum ALIGNMENT {
  "CENTER" = "_center",
}
@customElement("l-card")
export default class Card extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly alignment: ALIGNMENT | null =
    null;

  @property({ type: String }) private readonly color: COLOR | null = null;

  @property({ type: Object }) private readonly icon = { icon: [] };

  // Could accept array of icons and randomly / stagger them
  protected renderBackground(icon = [0, 0, null, ""]): Array<TemplateResult> {
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
    for (let i = 0; i < 6 * 6 + 1; i += 1) {
      result.push(bgIcon);
    }
    return result;
  }

  protected render() {
    const color: string = this.color ? ` ${NAME[this.color]}` : "";
    const alignment: string = this.alignment ? ` ${NAME[this.alignment]}` : "";
    return html`
      <div class="${NAME.container}${color}${alignment}">
        <div class="${NAME.content}">
          <slot></slot>
        </div>
        <div class="${NAME.background}">
          ${this.icon.icon.length && this.renderBackground(this.icon.icon)}
        </div>
      </div>
    `;
  }
}
