import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./button.scss";
import NAME from "./button.scss.json";

export enum TYPE {
  SECONDARY = "_2",
}
@customElement("c-button")
export default class Button extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) type: TYPE | null = null;

  protected render() {
    const type = this.type ? ` ${NAME[this.type]}` : "";
    return html`<button class="${NAME.button}${type}">
      <slot></slot>
    </button>`;
  }
}
