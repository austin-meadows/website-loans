import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./heading.scss";
import NAME from "./heading.scss.json";

export enum TYPE {
  SECONDARY = "_2",
  TERTIARY = "_3",
}
@customElement("c-heading")
export default class Heading extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) type: TYPE | null = null;

  protected render() {
    console.log("There's a heading?");

    const type = this.type ? ` ${NAME[this.type]}` : "";
    return html`
      <span class="${NAME.heading}${type}" role="heading">
        <slot></slot>
      </span>
    `;
  }
}
