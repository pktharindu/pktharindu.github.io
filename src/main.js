import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VueTyperPlugin from "vue-typer";
import VueScrollTo from "vue-scrollto";

Vue.use(BootstrapVue);
Vue.use(VueTyperPlugin);
Vue.use(VueScrollTo, {
  duration: 1000,
  easing: "ease-out"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
