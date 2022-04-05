import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import STYLE from "./column.scss";

@customElement("l-column")
export default class Column extends LitElement {
  static readonly styles = STYLE;

  protected render() {
    return html`<slot></slot>`;
  }
}
