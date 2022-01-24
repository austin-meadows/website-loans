import "../config/js/router";
import "../components/link";

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import style from "./navigation.scss";

const ACTIVE = "active";
@customElement("l-navigation")
export default class Navigation extends LitElement {
  static readonly styles = style;

  static readonly initUrl = window.location.pathname;

  @property({ attribute: false })
  private active?: Element;

  render() {
    return html`
      <nav id="nav">
        <c-link
          @click="${this._handleClick}"
          class="nav-link${Navigation.initUrl === "/" ? " active" : ""}"
          to="/"
        >
          Home
        </c-link>
        <c-link
          @click="${this._handleClick}"
          class="nav-link${Navigation.initUrl === "/sign-in" ? " active" : ""}"
          to="/sign-in"
        >
          Sign In
        </c-link>
        <c-link
          @click="${this._handleClick}"
          class="nav-link${Navigation.initUrl === "/storyboard"
            ? " active"
            : ""}"
          to="/storyboard"
        >
          Storyboard
        </c-link>
      </nav>
    `;
  }

  private _handleClick(event: MouseEvent): void {
    console.info("l-nav | nav click", event.target);
    const target = event.target as Element;
    if (this.active === target) return;
    this.active = target;
    const parent = target.parentElement;
    parent?.getElementsByClassName(ACTIVE)[0]?.classList.remove(ACTIVE);
    target.classList.add(ACTIVE);
  }
}
