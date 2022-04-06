import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import FONT_SIZE from "../utils/js/size";

import STYLE from "./text.scss";
import NAME from "./text.scss.json";

@customElement("c-text")
export default class Text extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly size: FONT_SIZE | null =
    FONT_SIZE.ONE;

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
