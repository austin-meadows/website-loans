import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import style from "./card.scss";

@customElement("l-card")
export default class Card extends LitElement {
  static readonly styles = style;

  protected render() {
    return html`<slot></slot>`;
  }
}
