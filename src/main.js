import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { Axios } from 'axios'
import VueAxios from 'vue-axios'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify).use(VueAxios, Axios)
  .mount('#app')
  
