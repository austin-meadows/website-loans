import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import COLOR from "../utils/js/color";

import STYLE from "./section.scss";
import NAME from "./section.scss.json";

@customElement("l-section")
export default class Section extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly color: COLOR | null = null;

  protected render() {
    const color = this.color ? ` ${NAME[this.color]}` : "";
    return html`
      <section class="${NAME.section}${color}">
        <slot></slot>
      </section>
    `;
  }
}
