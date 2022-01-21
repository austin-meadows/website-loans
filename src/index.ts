import "./app";

import { Router } from "@vaadin/router";

const outlet = document.getElementById("main");
const router = new Router(outlet);
router.setRoutes([
  {
    path: "/",
    component: "app-root",
    children: [
      {
        path: "/",
        component: "v-home",
        action: async () => {
          await import("./views/Home");
        },
      },
      {
        path: "/sign-in",
        component: "v-home",
        action: async () => {
          await import("./views/Home");
        },
      },
    ],
  },
]);
