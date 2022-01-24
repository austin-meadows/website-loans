import { Router } from "@vaadin/router";

const router = new Router(document.body);
router.setRoutes([
  {
    children: [
      {
        action: async () => {
          await import("../../views/Home");
        },
        component: "v-home",
        path: "/",
      },
      {
        action: async () => {
          await import("../../views/SignIn");
        },
        component: "v-signin",
        path: "/sign-in",
      },
      {
        action: async () => {
          await import("../../views/Storyboard");
        },
        component: "v-storyboard",
        path: "/storyboard",
      },
    ],
    component: "s-app",
    path: "/",
  },
]);

export default router;
