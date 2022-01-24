import "../config/js/router";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("l-navigation")
export default class Navigation extends LitElement {
  protected render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/sign-in">Sign In</a>
      </nav>
    `;
  }
}
