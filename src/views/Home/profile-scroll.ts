import { mkAlea, AleaPRNG } from "@spissvinkel/alea";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import SIZE from "../../utils/js/size";

import STYLE from "./profile-scroll.scss";
import NAME from "./profile-scroll.scss.json";

@customElement("h-scroll")
export default class Button extends LitElement {
  static readonly styles = STYLE;

  @property({ attribute: false })
  protected random?: AleaPRNG;

  constructor() {
    super();
    this.random = mkAlea("h-scroll");
  }

  protected render() {
    ``;
    const { random } = mkAlea("h-scroll");
    return html`
      <div
        class="${NAME.scroll}"
        role="presentation"
        aria-label="Example user profile list"
      >
        <div class="profile">
          <div class="avatar">
            <c-icon .icon="${faUser}" size=${SIZE.ONE_75}></c-icon>
          </div>
          <div
            class="${NAME["name-text"]}"
            style="width:${200 + Math.round(random() * 100)}px"
          ></div>
          <div class="description">
            <span class="text"></span>
            <span class="text"></span>
            <span class="text"></span>
          </div>
        </div>
      </div>
    `;
  }
}
