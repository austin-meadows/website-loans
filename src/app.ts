import "./includes/router";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import style from "./app.scss";

@customElement("x-app")
export default class App extends LitElement {
  static styles = style;

  protected render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/sign-in">Sign In</a>
      </nav>
      <main>
        <slot></slot>
      </main>
    `;
  }
}
