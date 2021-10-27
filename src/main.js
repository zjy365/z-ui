import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const context = require.context('./', true,  /^((?!main\.js).)+\.js$/)
try {
  context.keys().forEach(path => {
    let res = context(path)
    // console.log(res);
    Vue.component(res.default.name, res.default)
  })
} catch (e) {
  console.log(e)
}

new Vue({
  render: h => h(App),
}).$mount('#app')
