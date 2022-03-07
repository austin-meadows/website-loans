import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import style from "./row.scss";

@customElement("l-column")
export default class Column extends LitElement {
  static readonly styles = style;

  protected render() {
    return html`
      <div class="column">
        <slot></slot>
      </div>
    `;
  }
}
