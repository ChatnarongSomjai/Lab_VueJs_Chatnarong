import Vue from "vue";
import Router from "vue-router";

import home from "../components/profile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/contact",
      component: () => import("../components/contact.vue")
    },
    {
      path: "/project",
      component: () => import("../components/project.vue")
    }
  ]
});
