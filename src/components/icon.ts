import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import style from "./icon.scss";

@customElement("c-icon")
export default class Button extends LitElement {
  static readonly styles = style;

  @property({ type: Object }) private readonly icon = {};

  protected render() {
    console.info("c-icon | Rendered:", this.icon);

    return html`
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 ${this.icon.icon[0]} ${this.icon.icon[1]}"
      >
        <path fill="currentColor" d="${this.icon.icon[4]}" class=""></path>
      </svg>
    `;
  }
}
