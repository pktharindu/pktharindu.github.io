import Vue from "vue";
import App from "./App.vue";
import { Navbar } from "bootstrap-vue/es/components";
import { Modal } from "bootstrap-vue/es/components";
import bTooltip from "bootstrap-vue/es/directives/tooltip/tooltip";
import VueTyperPlugin from "vue-typer";
import VueScrollactive from "vue-scrollactive";
import VeeValidate from "vee-validate";
import Notifications from "vue-notification";
import AOS from "aos";

Vue.use(Navbar);
Vue.use(Modal);
Vue.use(VueTyperPlugin);
Vue.use(VueScrollactive);
Vue.use(VeeValidate);
Vue.use(Notifications);

Vue.directive("b-tooltip", bTooltip);

Vue.config.productionTip = true;

new Vue({
  mounted() {
    AOS.init({
      offset: 0,
      duration: 1000,
      delay: 300,
      disable: "mobile",
      anchorPlacement: "top-top"
    });
  },
  mode: "history",
  render: h => h(App)
}).$mount("#app");
