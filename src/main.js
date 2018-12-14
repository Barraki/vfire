import Vue from 'vue';
import './firebase';
import App from './App.vue';
import VueFire from 'vuefire';
import BootstrapVue from 'bootstrap-vue';
import datepicker from 'vue-date'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueFire);
Vue.use(BootstrapVue);
Vue.use(datepicker);


new Vue({
  el: '#app',
	render: h => h(App)
})
