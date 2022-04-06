import {
  faSeedling,
  faLandmarkDome,
  faSackXmark,
  faCalendarDay,
  faPerson,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { LEVEL } from "../components/heading";
import { SIZE } from "../components/icon";
import { ALIGNMENT as CARD_ALIGNMENT } from "../layout/card";
import { SIZE as GRID_SIZE } from "../layout/grid";
import { ALIGNMENT } from "../layout/row";
import COLOR from "../utils/js/color";

import "../components/color";
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
            <c-color color="${COLOR["PRIMARY_-1"]}">
              <c-icon .icon="${faSeedling}" size="${SIZE.LARGE}"></c-icon>
            </c-color>
            s
          </c-heading>
        </l-row>
        <l-row alignment="${ALIGNMENT.CENTER}">
          <c-heading level="${LEVEL.THREE}">
            <c-color color="${COLOR["PRIMARY_-1"]}" .isBold="${true}"
              >Donate</c-color
            >${" "}to your peers to help with their student loans.
            <br />
            <c-color color="${COLOR["PRIMARY_-1"]}" .isBold="${true}"
              >List</c-color
            >${" "} your own.
          </c-heading>
        </l-row>
      </l-section>
      <l-section>
        <l-grid>
          <l-card
            alignment="${CARD_ALIGNMENT.CENTER}"
            color="${COLOR.YELLOW_0}"
            .icon="${faLandmarkDome}"
          >
            <c-heading level="${LEVEL.THREE}"
              >$1.6 Trillion
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            in just Federal student loan debt
          </l-card>
          <l-card alignment="${CARD_ALIGNMENT.CENTER}" .icon="${faSackXmark}">
            <c-heading level="${LEVEL.THREE}">
              $30,000
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            average loan balance
          </l-card>
          <l-card
            alignment="${CARD_ALIGNMENT.CENTER}"
            color="${COLOR.BLUE_0}"
            .icon="${faCalendarDay}"
          >
            <c-heading level="${LEVEL.THREE}">
              $300
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            average monthly payment
          </l-card>
          <l-card
            alignment="${CARD_ALIGNMENT.CENTER}"
            color="${COLOR.RED_0}"
            .icon="${faPerson}"
          >
            <c-heading level="${LEVEL.THREE}">
              45 Million
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            peers with debt
          </l-card>
          <l-card
            alignment="${CARD_ALIGNMENT.CENTER}"
            color="${COLOR.ORANGE_0}"
            .icon="${faGraduationCap}"
          >
            <c-heading level="${LEVEL.THREE}">
              65%
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            graduate with debt
          </l-card>
        </l-grid>
      </l-section>
      <l-section>
        <!-- // Blurb about Donating + generic profile List
        // Blurb about Listing (own section) + generic profile -->
        <l-grid size="${GRID_SIZE.TWO}">
          <l-card>
            <c-heading level="${LEVEL.THREE}" .isBold=${true}>Donate</c-heading>
            Donate to students in need of help with their student loan debt.
            <br />
            There are many options to donate to individuals or many: - By field
            of interest - By amount needed - By school - Randomly
          </l-card>
        </l-grid>
      </l-section>
    `;
  }
}
