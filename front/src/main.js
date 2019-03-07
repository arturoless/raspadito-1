import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#C41949',
    secondary: '#F50057',
    accent: '#6BC048',
    error: '#D50000'
  },
  darkTheme:{
    primary: '#6BC048',
    secondary: '#6BC048',
    accent: '#6BC048',
    error: '#D50000'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

