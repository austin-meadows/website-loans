import "./layout/main";
import "./layout/navigation";

import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("s-app")
export default class App extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
    }
  `;

  protected render() {
    console.info("s-app | rendered");
    return html`
      <l-navigation></l-navigation>
      <l-main></l-main>
    `;
  }
}
