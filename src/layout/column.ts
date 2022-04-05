import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import style from "./column.scss";

@customElement("l-column")
export default class Column extends LitElement {
  static readonly styles = style;

  protected render() {
    return html`<slot></slot>`;
  }
}
