import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import style from "./row.scss";

@customElement("l-row")
export default class Row extends LitElement {
  static readonly styles = style;

  protected render() {
    return html`
      <div class="row">
        <slot></slot>
      </div>
    `;
  }
}
