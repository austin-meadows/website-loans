import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import STYLE from "./grid.scss";

@customElement("l-grid")
export default class Grid extends LitElement {
  static readonly styles = STYLE;

  protected render() {
    return html`<slot></slot>`;
  }
}
