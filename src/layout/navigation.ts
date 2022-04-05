import {
  faArrowRightToBracket,
  faCircleInfo,
  faFileImage,
  faGraduationCap,
  // faHouse,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import router from "../config/js/router";

import STYLE from "./navigation.scss";
import NAME from "./navigation.scss.json";

import "../components/icon";

@customElement("l-navigation")
export default class Navigation extends LitElement {
  static readonly styles = STYLE;

  static readonly initUrl = window.location.pathname;

  @property({ attribute: false })
  private active?: Element;

  protected render() {
    return html`
      <header>
        <nav id="${NAME.nav}">
          <div class="${NAME.links}">
            <a class="${NAME["nav-link"]}" href="/">
              <c-icon .icon="${faSeedling}"></c-icon>
              Loans
            </a>
            <a
              @click="${this.handleClick}"
              class="${NAME["nav-link"]}${Navigation.initUrl === "/"
                ? ` ${NAME._active}`
                : ""}"
              href="/"
            >
              <c-icon .icon="${faCircleInfo}"></c-icon>
              About
            </a>
            <a
              @click="${this.handleClick}"
              class="${NAME["nav-link"]}${Navigation.initUrl === "/sign-in"
                ? ` ${NAME._active}`
                : ""}"
              href="/"
            >
              <c-icon .icon="${faGraduationCap}"></c-icon>
              Students
            </a>
            <a
              @click="${this.handleClick}"
              class="${NAME["nav-link"]}${Navigation.initUrl === "/storyboard"
                ? ` ${NAME._active}`
                : ""}"
              href="/storyboard"
            >
              <c-icon .icon="${faFileImage}"></c-icon>
              Storyboard
            </a>
          </div>
          <div class="2">
            <a
              @click="${this.handleClick}"
              class="${NAME["nav-link"]}${Navigation.initUrl === "/sign-in"
                ? ` ${NAME._active}`
                : ""}"
              href="/sign-in"
            >
              <c-icon .icon="${faArrowRightToBracket}"></c-icon>
              Sign In
            </a>
          </div>
        </nav>
      </header>
    `;
  }

  private handleClick(event: MouseEvent): void {
    event.preventDefault();
    const target = event.target as Element;
    if (this.active === target) return;
    this.active = target;
    target.parentElement?.parentElement
      ?.getElementsByClassName(NAME._active)[0]
      ?.classList.remove(NAME._active);
    target.classList.add(NAME._active);
    router.navigate(target.getAttribute("href") || "/");
  }
}
