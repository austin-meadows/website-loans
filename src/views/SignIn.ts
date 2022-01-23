import "../components/button";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("v-signin")
export default class SignIn extends LitElement {
  protected render() {
    return html`<c-button>Testing</c-button>`;
  }
}
