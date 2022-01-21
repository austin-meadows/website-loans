import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { router } from "lit-element-router";

@router
@customElement("app-root")
export default class App extends LitElement {
  @property({ type: String }) route = "/";

  @property({ type: Object }) params: object = {};

  @property({ type: Object }) query: object = {};

  static get routes() {
    return [
      {
        name: "home",
        pattern: "",
        data: { title: "Home" },
      },
      {
        name: "info",
        pattern: "info",
      },
      {
        name: "user",
        pattern: "user/:id",
      },
      {
        name: "not-found",
        pattern: "*",
      },
    ];
  }

  router(route: string, params: object, query: object, data: any) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }

  protected render() {
    return html`
      <nav id="nav">
        <a class="active" href="/">Home</a>
        <a class="active" href="/sign-in">Sign In</a>
      </nav>
      <slot></slot>
    `;
  }
}
