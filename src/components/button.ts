import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import style from "./button.scss";

enum TYPE {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}
@customElement("c-button")
export default class Home extends LitElement {
  static readonly styles = style;

  @property({ type: Number }) type: TYPE = 0;

  protected render() {
    return html`<button class="button ${this.type}"><slot></slot></button>`;
  }
}
