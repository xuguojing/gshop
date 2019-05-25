/*
入口JS
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer'    //加载mockServer即可
import VueLazyload from 'vue-lazyload'
import timg from './common/images/timg.gif'
import './filters'  //加载过滤器
Vue.component(Button.name,Button)
Vue.use(VueLazyload, {
  timg
})
new Vue({
	el:"#app",
	render:h => h(App),
	router,
	store
})