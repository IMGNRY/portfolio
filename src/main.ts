import Vue from 'vue'
import App from './App'

// declare namespace Flickity {
// 	interface FlickityOptions {
// 		on?: any
// 	}
// }

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')
