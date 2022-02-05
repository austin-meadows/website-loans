import "../components/button";
import "../layout/row";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("v-home")
export default class Home extends LitElement {
  protected render() {
    return html`
      <l-row>Content 1</l-row>
      <l-row>Content 2</l-row>
    `;
  }
}
