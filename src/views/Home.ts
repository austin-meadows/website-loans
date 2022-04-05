import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { TYPE } from "../components/color";
import { LEVEL } from "../components/heading";
import { SIZE } from "../components/icon";
import { ALIGNMENT } from "../layout/row";

import "../components/button";
import "../layout/section";

@customElement("v-home")
export default class Home extends LitElement {
  protected render() {
    return html`
      <l-section>
        <l-row alignment="${ALIGNMENT.CENTER}">
          <c-heading .isBold=${true}>
            Help out your fellow ${" "}
            <c-color type="${TYPE["PRIMARY_-1"]}">
              <c-icon .icon="${faSeedling}" size="${SIZE.LARGE}"></c-icon>
            </c-color>
            s
          </c-heading>
        </l-row>
        <l-row alignment="${ALIGNMENT.CENTER}">
          <c-heading level="${LEVEL.THREE}">
            <c-color type="${TYPE["PRIMARY_-1"]}" .isBold="${true}"
              >Donate</c-color
            >${" "}to your peers to help with their student loans.
            <br />
            <c-color type="${TYPE["PRIMARY_-1"]}" .isBold="${true}"
              >List</c-color
            >${" "} your own.
          </c-heading>
        </l-row>
      </l-section>
      <l-section></l-section>
    `;
  }
}
