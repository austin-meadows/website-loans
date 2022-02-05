import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "../components/button";

@customElement("v-signin")
export default class SignIn extends LitElement {
  protected render() {
    return html`<c-button>Sign In Button</c-button>`;
  }
}
