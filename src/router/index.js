import Vue from "vue";
import VueRouter from "vue-router";
import Program from "../views/Program.vue";

import Dec17 from "../views/tabs/Dec17";
import Dec18 from "../views/tabs/Dec18";
import Dec19 from "../views/tabs/Dec19";
import Dec20 from "../views/tabs/Dec20";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/program/18"
  },
  {
    path: "/program",
    component: Program,
    children: [
      {
        path: "",
        redirect: "/18"
      },
      {
        path: "17",
        component: Dec17
      },
      {
        path: "18",
        component: Dec18
      },
      {
        path: "19",
        component: Dec19
      },
      {
        path: "20",
        component: Dec20
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  routes
});

export default router;
