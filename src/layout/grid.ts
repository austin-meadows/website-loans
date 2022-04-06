import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./grid.scss";
import NAME from "./grid.scss.json";

export enum SIZE {
  "TWO" = "_2",
  "THREE" = "_3",
}
@customElement("l-grid")
export default class Grid extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly size: SIZE | null = null;

  protected render() {
    const size: string = this.size ? ` ${NAME[this.size]}` : "";

    return html`
      <div class="${NAME.grid}${size}">
        <slot></slot>
      </div>
    `;
  }
}
