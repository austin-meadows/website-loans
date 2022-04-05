import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./row.scss";
import NAME from "./row.scss.json";

export enum ALIGNMENT {
  CENTER = "_center",
  RIGHT = "_right",
}
@customElement("l-row")
export default class Row extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly alignment: ALIGNMENT | null =
    null;

  protected render() {
    const alignment = this.alignment ? ` ${NAME[this.alignment]}` : "";
    return html`<div class="${NAME.row}${alignment}"><slot></slot></div>`;
  }
}
