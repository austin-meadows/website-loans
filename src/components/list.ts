import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./list.scss";
import NAME from "./list.scss.json";

@customElement("c-list")
export default class List extends LitElement {
  static readonly styles = STYLE;

  @property({ type: Array }) private readonly items: Array<TemplateResult> = [];

  protected render() {
    return html`
      <ul class="${NAME.list}">
        ${this.items.map(
          (item) => html`<li class=${NAME["list-item"]}>${item}</li>`
        )}
      </ul>
    `;
  }
}
