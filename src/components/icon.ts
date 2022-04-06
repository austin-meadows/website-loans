import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import SIZE from "../utils/js/size";

import STYLE from "./icon.scss";
import NAME from "./icon.scss.json";

@customElement("c-icon")
export default class Button extends LitElement {
  static readonly styles = STYLE;

  @property({ type: Object }) private readonly icon = {
    icon: [0, 0, null, ""],
  };

  @property({ type: String }) private readonly size: SIZE | null = null;

  protected render() {
    const size = this.size ? ` ${NAME[this.size]}` : "";
    return html`
      <svg
        class="${NAME.svg}${size}"
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 ${this.icon.icon[0]} ${this.icon.icon[1]}"
      >
        <path fill="currentColor" d="${this.icon.icon[4]}"></path>
      </svg>
    `;
  }
}
