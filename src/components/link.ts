import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import STYLE from "./link.scss";
import NAME from "./link.scss.json";

@customElement("c-link")
export default class Link extends LitElement {
  static readonly styles = STYLE;

  @property({ type: String }) private readonly to = window.location.pathname;

  protected render() {
    return html`
      <a class="${NAME.link}" href="${this.to}">
        <slot></slot>
      </a>
    `;
  }
}
