import Vue from 'vue';
import './firebase';
import firebase from 'firebase';
import App from './App.vue';
import VueFire from 'vuefire';


Vue.use(VueFire);

new Vue({
  el: '#app',
  render: h => h(App)
})
