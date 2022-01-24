import "../components/button";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("v-home")
export default class Home extends LitElement {
  protected render() {
    return html`<c-button>Home Button</c-button>`;
  }
}
