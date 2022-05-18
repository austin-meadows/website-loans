import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./profile-scroll.scss";

@customElement("t-scroll")
export default class Button extends LitElement {
  static readonly styles = STYLE;

  // protected render() {
  //   const type = this.type ? ` ${NAME[this.type]}` : "";
  //   return html`<button class="${NAME.button}${type}">
  //     <slot></slot>
  //   </button>`;
  // }
}
