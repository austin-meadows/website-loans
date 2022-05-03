import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./layout/main";
import "./layout/navigation";

import STYLES from "./app.scss";

@customElement("s-app")
export default class App extends LitElement {
  static readonly styles = STYLES;

  protected render() {
    console.info("s-app | rendered");
    return html`
      <l-navigation></l-navigation>
      <l-main></l-main>
    `;
  }
}
