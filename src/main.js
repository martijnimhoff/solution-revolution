import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
// import Home from "./pages/Home";
import Participate from "./pages/Participate";
import Attribution from "./pages/Attribution";
import TileView from "./pages/TileView";
import MapView from "./pages/MapView";
import Vision from "./pages/Vision";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVideo, faUserFriends, faShareAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faVideo, faUserFriends, faShareAlt, faBars);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    component: TileView,
    path: '/',
  },
  {
    component: Vision,
    path: '/vision',
  },
  {
    component: MapView,
    path: '/livefeed',
  },
  {
    component: Attribution,
    path: '/attribution',
  },
  {
    component: Participate,
    path: '/participate',
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
