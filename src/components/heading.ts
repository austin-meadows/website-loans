import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./heading.scss";
import NAME from "./heading.scss.json";

export enum SIZE {
  TWO = "_2",
  THREE = "_3",
}
@customElement("c-heading")
export default class Heading extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly size: SIZE | null = null;

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