import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./color.scss";
import NAME from "./color.scss.json";

export enum TYPE {
  "PRIMARY_-1" = "primary_-1",
  PRIMARY_0 = "primary_0",
  GRAY = "gray_0",
}
@customElement("c-color")
export default class Color extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly type: TYPE | null = null;

  protected render() {
    const type = this.type ? NAME[this.type] : "";
    return html`
      <span class="${type}">
        <slot></slot>
      </span>
    `;
  }
}
