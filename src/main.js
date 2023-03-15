import { createApp } from "vue";
import App from "./App.vue";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'mdi-icons/css/materialdesignicons.min.css';
import 'devextreme/dist/css/dx.light.css';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");