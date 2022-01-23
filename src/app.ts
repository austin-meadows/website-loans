import "./layout/navigation";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("s-app")
export default class App extends LitElement {
  protected render() {
    return html`
      <l-nav></l-nav>
      <main>
        <slot></slot>
      </main>
    `;
  }
}
