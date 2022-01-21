import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-root")
export default class App extends LitElement {
  render() {
    return html`
      <nav id="nav">
        <a class="active" href="/">Home</a>
        <a class="active" href="/sign-in">Sign In</a>
      </nav>
      <slot></slot>
    `;
  }
}
