import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./button.scss";
import NAMES from "./button.scss.json";

export enum TYPE {
  PRIMARY = "",
  SECONDARY = "_2",
}
@customElement("c-button")
export default class Button extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) type: TYPE = TYPE.PRIMARY;

  protected render() {
    return html`<button class="${NAMES.button} ${NAMES[this.type]}">
      <slot></slot>
    </button>`;
  }
}
