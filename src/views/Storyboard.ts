import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { TYPE } from "../components/button";
import "../components/link";
import "../layout/card";
import "../layout/grid";
import "../layout/section";

@customElement("v-storyboard")
export default class Storyboard extends LitElement {
  protected render() {
    return html`
      <h1>Button</h1>
      <l-section>
        <c-button>Button Primary</c-button>
        <c-button type="${TYPE.SECONDARY}">Button Secondary</c-button>
        <c-button>Button Tertiary</c-button>
        <div>
          <c-button>Continue</c-button>
          <c-button type="${TYPE.SECONDARY}">Cancel</c-button>
        </div>
      </l-section>

      <h1>Link</h1>
      <l-section>
        <c-link to="/storyboard" icon="testing">Storyboard Link</c-link>
        <div>
          This link is${" "}<c-link>inline</c-link>${" "}with other text
        </div>
      </l-section>

      <h1>Section + Card</h1>
      <l-section>
        <l-grid>
          <l-card>Content</l-card>
          <l-card>Content</l-card>
          <l-card>Content</l-card>
        </l-grid>
      </l-section>
    `;
  }
}
