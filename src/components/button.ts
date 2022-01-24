import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import style from "./button.scss";

export enum TYPE {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
@customElement("c-button")
export default class Button extends LitElement {
  static readonly styles = style;

  @property({ type: String }) type: TYPE = TYPE.PRIMARY;

  protected render() {
    return html`<button class="button${this.type ? " " : ""}${this.type}">
      <slot></slot>
    </button>`;
  }
}
