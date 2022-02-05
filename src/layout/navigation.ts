import "../components/link";

import router from "../config/js/router";

import style from "./navigation.scss";

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

const ACTIVE = "active";
@customElement("l-navigation")
export default class Navigation extends LitElement {
  static readonly styles = style;

  static readonly initUrl = window.location.pathname;

  @property({ attribute: false })
  private active?: Element;

  protected render() {
    return html`
      <nav id="nav">
        <a
          @click="${this.handleClick}"
          class="nav-link${Navigation.initUrl === "/" ? " active" : ""}"
          href="/"
        >
          Home
        </a>
        <a
          @click="${this.handleClick}"
          class="nav-link${Navigation.initUrl === "/sign-in" ? " active" : ""}"
          href="/sign-in"
        >
          Sign In
        </a>
        <a
          @click="${this.handleClick}"
          class="nav-link${Navigation.initUrl === "/storyboard"
            ? " active"
            : ""}"
          href="/storyboard"
        >
          Storyboard
        </a>
      </nav>
    `;
  }

  private handleClick(event: MouseEvent): void {
    event.preventDefault();
    const target = event.target as Element;
    if (this.active === target) return;
    this.active = target;
    target.parentElement
      ?.getElementsByClassName(ACTIVE)[0]
      ?.classList.remove(ACTIVE);
    target.classList.add(ACTIVE);
    router.navigate(target.getAttribute("href") || "/");
  }
}
