import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import 'vue-awesome/icons'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('v-icon', Icon)

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
