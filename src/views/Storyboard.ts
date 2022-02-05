import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { TYPE } from "../components/button";

import "../components/link";

@customElement("v-storyboard")
export default class Storyboard extends LitElement {
  protected render() {
    return html`
      <h1>Button</h1>
      <div>
        <c-button>Button Primary</c-button>
        <c-button type="${TYPE.SECONDARY}">Button Secondary</c-button>
        <c-button>Button Tertiary</c-button>
      </div>

      <h1>Link</h1>
      <div>
        <c-link to="/storyboard" icon="testing">Storyboard Link</c-link>
      </div>
      <div>This link is${" "}<c-link>inline</c-link>${" "}with other text</div>
    `;
  }
}
