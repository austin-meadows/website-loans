import { LitElement, TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import router from "../config/js/router";

import style from "./main.scss";

@customElement("l-main")
export default class Main extends LitElement {
  static readonly styles = style;

  @property({ attribute: false })
  protected view?: TemplateResult;

  constructor() {
    super();
    router
      .on("/", () => {
        import("../views/Home").then(() => {
          this.view = html`<v-home></v-home>`;
        });
      })
      .on("/sign-in", () => {
        import("../views/SignIn").then(() => {
          this.view = html`<v-signin></v-signin>`;
        });
      })
      .on("/storyboard", () => {
        import("../views/Storyboard").then(() => {
          this.view = html`<v-storyboard></v-storyboard>`;
        });
      })
      .resolve();
  }

  protected render() {
    console.info("l-main | View Rendered:", this.view);
    return html`<main>${this.view}</main>`;
  }
}
