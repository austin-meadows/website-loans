import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("v-home")
export default class Home extends LitElement {
  render() {
    return html`<p>Testing</p>`;
  }
}
