import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "../components/button";
import "../layout/column";
import "../layout/row";

@customElement("v-home")
export default class Home extends LitElement {
  protected render() {
    return html`
      <l-row>
        <l-column>Content 1</l-column>
        <l-column>Content 2</l-column>
        <l-column>Content 3</l-column>
      </l-row>
    `;
  }
}
