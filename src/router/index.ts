import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue")
  },
  {
    path: "/pictures",
    name: "pictures",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pictures.vue")
  },
  {
    path: "/musics",
    name: "musics",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Musics.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/tours",
    name: "tours",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tours.vue")
  },
  {
    path: "/videos",
    name: "videoss",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Videos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
