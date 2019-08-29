import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "bootstrap/scss/bootstrap.scss";
import BootstrapVue from "bootstrap-vue";
import Flip from "@/components/FlipCard.vue";

Vue.use(BootstrapVue);
Vue.component("flip-card", Flip);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
