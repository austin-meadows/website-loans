import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import STYLE from "./section.scss";

@customElement("l-section")
export default class Section extends LitElement {
  static readonly styles = STYLE;

  protected render() {
    return html`
      <section>
        <slot></slot>
      </section>
    `;
  }
}
