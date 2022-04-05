import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import style from "./section.scss";

@customElement("l-section")
export default class Row extends LitElement {
  static readonly styles = style;

  protected render() {
    return html`
      <section class="section">
        <slot></slot>
      </section>
    `;
  }
}
