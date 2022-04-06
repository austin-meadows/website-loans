import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import COLOR from "../utils/js/color";

import STYLE from "./color.scss";
import NAME from "./color.scss.json";

@customElement("c-color")
export default class Color extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly color: COLOR | null = null;

  @property({ type: Boolean }) private readonly isBold = false;

  protected render() {
    const color = this.color ? NAME[this.color] : "";
    const bold = this.isBold ? ` ${NAME._isBold}` : "";
    return html`
      <span class="${color}${bold}">
        <slot></slot>
      </span>
    `;
  }
}
