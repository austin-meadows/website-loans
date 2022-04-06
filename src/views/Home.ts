import {
  faBook,
  faCalendarDay,
  faGraduationCap,
  faLandmarkDome,
  faPerson,
  faSackXmark,
  faSchool,
  faSeedling,
  faShuffle,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { ALIGNMENT as CARD_ALIGNMENT, TYPE } from "../layout/card";
import { COLUMNS as GRID_COLUMNS } from "../layout/grid";
import { COLUMNS as LIST_COLUMNS } from "../layout/list";
import { ALIGNMENT } from "../layout/row";
import COLOR from "../utils/js/color";
import SIZE from "../utils/js/size";

import "../components/color";
import "../components/button";
import "../components/heading";
import "../components/text";
import "../layout/section";

@customElement("v-home")
export default class Home extends LitElement {
  protected render() {
    return html`
      <l-section>
        <l-row alignment="${ALIGNMENT.CENTER}">
          <c-heading .isBold=${true}>
            Help out your fellow ${" "}
            <c-color color="${COLOR["PRIMARY_-1"]}"
              ><c-icon .icon="${faSeedling}" size="${SIZE.THREE}"></c-icon>
            </c-color>
            s
          </c-heading>
        </l-row>
        <l-row alignment="${ALIGNMENT.CENTER}">
          <c-heading size="${SIZE.TWO}">
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
            <c-heading size="${SIZE.TWO_25}"
              >$1.6 Trillion
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            <c-text size=${SIZE.ONE_25}>
              in just Federal student loan debt
            </c-text>
          </l-card>
          <l-card alignment="${CARD_ALIGNMENT.CENTER}" .icon="${faSackXmark}">
            <c-heading size="${SIZE.TWO_25}">
              $30,000
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            <c-text size=${SIZE.ONE_25}> average loan balance </c-text>
          </l-card>
          <l-card
            alignment="${CARD_ALIGNMENT.CENTER}"
            color="${COLOR.BLUE_0}"
            .icon="${faCalendarDay}"
          >
            <c-heading size="${SIZE.TWO_25}">
              $300
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            <c-text size=${SIZE.ONE_25}>average monthly payment</c-text>
          </l-card>
          <l-card
            alignment="${CARD_ALIGNMENT.CENTER}"
            color="${COLOR.RED_0}"
            .icon="${faPerson}"
          >
            <c-heading size="${SIZE.TWO_25}">
              45 Million
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            <c-text size=${SIZE.ONE_25}>peers with debt</c-text>
          </l-card>
          <l-card
            alignment="${CARD_ALIGNMENT.CENTER}"
            color="${COLOR.ORANGE_0}"
            .icon="${faGraduationCap}"
          >
            <c-heading size="${SIZE.TWO_25}">
              65%
              <c-color color="${COLOR["GRAY_-2"]}" .isBold="${true}">+</c-color>
            </c-heading>
            <c-text size=${SIZE.ONE_25}>graduate with debt</c-text>
          </l-card>
        </l-grid>
      </l-section>
      <l-section color=${COLOR.GRAY_4}>
        <!-- // Blurb about Donating + generic profile List
        // Blurb about Listing (own section) + generic profile -->
        <l-grid columns="${GRID_COLUMNS.TWO}">
          <l-card type=${TYPE.FLAT} color=${COLOR.PRIMARY_1}>
            <c-heading .isBold=${true}>Donate</c-heading>

            <c-text size=${SIZE.ONE_50}
              >Contribute to students in a variety of ways!</c-text
            >
            <l-list
              columns=${LIST_COLUMNS.TWO}
              .items=${[
                html`<c-color color=${COLOR["PRIMARY_-3"]}
                    ><c-icon .icon="${faSchool}" size=${SIZE.ONE_75}></c-icon
                  ></c-color>
                  <c-text size=${SIZE.ONE_50}>By university</c-text>`,
                html`<c-color color=${COLOR["PRIMARY_-3"]}
                    ><c-icon .icon="${faBook}" size=${SIZE.ONE_75}></c-icon
                  ></c-color>
                  <c-text size=${SIZE.ONE_50}> By field of interest </c-text>`,
                html`<c-color color=${COLOR["PRIMARY_-3"]}
                    ><c-icon .icon="${faUser}" size=${SIZE.ONE_75}></c-icon
                  ></c-color>
                  <c-text size=${SIZE.ONE_50}>To individuals</c-text>`,
                html`<c-color color=${COLOR["PRIMARY_-3"]}
                    ><c-icon .icon="${faUsers}" size=${SIZE.ONE_75}></c-icon
                  ></c-color>
                  <c-text size=${SIZE.ONE_50}>To many at once</c-text>`,
                html`<c-color color=${COLOR["PRIMARY_-3"]}
                    ><c-icon .icon="${faShuffle}" size=${SIZE.ONE_75}></c-icon
                  ></c-color>
                  <c-text size=${SIZE.ONE_50}>Randomly</c-text>`,
              ]}
            >
            </l-list>
          </l-card>
          <l-card type=${TYPE.FLAT} color=${COLOR.GRAY_4}></l-card>
        </l-grid>
      </l-section>
    `;
  }
}
