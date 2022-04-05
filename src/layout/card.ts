import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import STYLE from "./card.scss";
import NAME from "./card.scss.json";

@customElement("l-card")
export default class Card extends LitElement {
  static readonly styles = STYLE;

  protected render() {
    return html`
      <div class="${NAME.container}">
        <div class="${NAME.content}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
