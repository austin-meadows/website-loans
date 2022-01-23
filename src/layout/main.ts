import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("l-main")
export default class Main extends LitElement {
  protected render() {
    return html`<main><slot></slot></main>`;
  }
}
