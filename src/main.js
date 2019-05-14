/*
入口JS
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
new Vue({
	el:"#app",
	render:h => h(App),
	router,
	bootstrap
})