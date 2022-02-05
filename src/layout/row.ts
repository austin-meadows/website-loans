import style from "./row.scss";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

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
