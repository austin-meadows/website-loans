import "./layout/main";
import "./layout/navigation";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("s-app")
export default class App extends LitElement {
  protected render() {
    console.info("App rendered");
    return html`
      <l-navigation></l-navigation>
      <l-main><slot></slot></l-main>
    `;
  }
}
