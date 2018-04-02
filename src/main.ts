import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	data() {
		return {
			test: 'okrv'
		}
	},
	render: h => h(App)
}).$mount('#app')
