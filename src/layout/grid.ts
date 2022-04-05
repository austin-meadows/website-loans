import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import style from "./grid.scss";

@customElement("l-grid")
export default class Grid extends LitElement {
  static readonly styles = style;

  protected render() {
    return html`<slot></slot>`;
  }
}
