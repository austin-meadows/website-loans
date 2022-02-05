import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "../components/button";
import "../layout/column";
import "../layout/row";

@customElement("v-home")
export default class Home extends LitElement {
  protected render() {
    return html`
      <l-row>Content 1</l-row>
      <l-row>Content 2</l-row>
    `;
  }
}
