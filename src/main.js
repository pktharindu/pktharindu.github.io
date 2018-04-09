import Vue from "vue";
import App from "./App.vue";
import { Navbar } from "bootstrap-vue/es/components";
import bTooltip from "bootstrap-vue/es/directives/tooltip/tooltip";
import VueTyperPlugin from "vue-typer";
import VueScrollTo from "vue-scrollto";

Vue.use(Navbar);
Vue.directive("b-tooltip", bTooltip);
Vue.use(VueTyperPlugin);
Vue.use(VueScrollTo, {
  duration: 1000,
  easing: "ease-out"
});

Vue.config.productionTip = false;

new Vue({
  mode: "history",
  render: h => h(App)
}).$mount("#app");
