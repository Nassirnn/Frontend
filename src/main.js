import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

Vue.use(firestorePlugin);

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCgBr1YaZsZ_PczYuq8x8CpTO_6yvangVs",
  authDomain: "ccsystems-7f10e.firebaseapp.com",
  projectId: "ccsystems-7f10e",
  storageBucket: "ccsystems-7f10e.appspot.com",
  messagingSenderId: "380029751782",
  appId: "1:380029751782:web:57020be7fb5eb6f0418627",
  measurementId: "G-BLPZGB9FGM"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
