import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./text.scss";
import NAME from "./text.scss.json";

export enum SIZE {
  ONE = "_1",
  TWO = "_2",
  THREE = "_3",
}
@customElement("c-text")
export default class Text extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly size: SIZE | null = null;

  @property({ type: Boolean }) private readonly isBold = false;

  protected render() {
    const size = this.size ? ` ${NAME[this.size]}` : "";
    const bold = this.isBold ? ` ${NAME._bold}` : "";

    return html`
      <span class="${NAME.text}${size}${bold}">
        <slot></slot>
      </span>
    `;
  }
}
