import "./router";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-root")
export default class App extends LitElement {
  protected render() {
    return html`
      <nav>
        <a href="/">Home</a>
      </nav>
      <main>
        <slot></slot>
      </main>
    `;
  }
}
