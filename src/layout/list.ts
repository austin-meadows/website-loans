import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./list.scss";
import NAME from "./list.scss.json";

export enum COLUMNS {
  "ONE" = "_col-1",
  "TWO" = "_col-2",
  "THREE" = "_col-3",
}

@customElement("l-list")
export default class List extends LitElement {
  static readonly styles = STYLE;

  @property({ type: Array }) private readonly items: Array<TemplateResult> = [];

  @property({ type: String }) private readonly columns: COLUMNS | null =
    COLUMNS.ONE;

  protected render() {
    const columns: string = this.columns ? ` ${NAME[this.columns]}` : "";

    return html`
      <ul class="${NAME.list}${columns}">
        ${this.items.map(
          (item) => html`<li class=${NAME["list-item"]}>${item}</li>`
        )}
      </ul>
    `;
  }
}
