import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("v-home")
export default class Home extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = "World";

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
