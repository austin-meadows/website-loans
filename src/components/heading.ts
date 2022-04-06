import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import FONT_SIZE from "../utils/js/size";

import STYLE from "./heading.scss";
import NAME from "./heading.scss.json";

@customElement("c-heading")
export default class Heading extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly size: FONT_SIZE | null =
    FONT_SIZE.THREE;

  @property({ type: Boolean }) private readonly isBold = false;

  protected render() {
    const size = this.size ? ` ${NAME[this.size]}` : "";
    const bold = this.isBold ? ` ${NAME._bold}` : "";

    return html`
      <span class="${NAME.heading}${size}${bold}" role="heading" aria-level="1">
        <slot></slot>
      </span>
    `;
  }
}
