import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./grid.scss";
import NAME from "./grid.scss.json";

export enum COLUMNS {
  "TWO" = "_2",
  "THREE" = "_3",
}
@customElement("l-grid")
export default class Grid extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly columns: COLUMNS | null = null;

  protected render() {
    const columns: string = this.columns ? ` ${NAME[this.columns]}` : "";
    return html`
      <div class="${NAME.grid}${columns}">
        <slot></slot>
      </div>
    `;
  }
}
