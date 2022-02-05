import style from "./link.scss";

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("c-link")
export default class Link extends LitElement {
  static readonly styles = style;

  @property({ type: String }) private icon = "";

  @property({ type: String }) private to = window.location.pathname;

  protected render() {
    return html`
      <a class="link" href="${this.to}">
        <slot></slot>
      </a>
    `;
  }
}
