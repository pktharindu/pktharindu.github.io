import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VueTyperPlugin from "vue-typer";
import VueScrollClass from "vue-scroll-class";

Vue.use(BootstrapVue);
Vue.use(VueTyperPlugin);

Vue.directive("scroll-class", VueScrollClass);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
