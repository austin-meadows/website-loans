import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-root")
export class App extends LitElement {
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
    return html`
      <nav id="nav">
        <a class="active" href="/">Home</a>
        <a class="active" href="/sign-in">Sign In</a>
      </nav>
      <slot></slot>
    `;
  }
}
