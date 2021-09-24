import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import money from "v-money";
import VueAxios from "vue-axios";

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(money, { precision: 2, decimal: ",", thousands: "." })
  .mount("#app");