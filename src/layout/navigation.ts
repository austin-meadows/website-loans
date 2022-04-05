import {
  faHouse,
  faArrowRightToBracket,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import router from "../config/js/router";

import style from "./navigation.scss";

import "../components/icon";

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
          <c-icon .icon="${faHouse}"></c-icon>
          Home
        </a>
        <a
          @click="${this.handleClick}"
          class="nav-link${Navigation.initUrl === "/sign-in" ? " active" : ""}"
          href="/sign-in"
        >
          <c-icon .icon="${faArrowRightToBracket}"></c-icon>
          Sign In
        </a>
        <a
          @click="${this.handleClick}"
          class="nav-link${Navigation.initUrl === "/storyboard"
            ? " active"
            : ""}"
          href="/storyboard"
        >
          <c-icon .icon="${faFileImage}"></c-icon>
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
