import Vue from "vue";
import VueRouter from "vue-router";
import Program from "../views/Program.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "program",
    component: Program
  }
];

const router = new VueRouter({
  routes
});

export default router;
