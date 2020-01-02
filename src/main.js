import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import routes from './router/routes';
import storeState from './vuex/store';


Vue.use(VueRouter);
Vue.use(Vuex);



// 配置vue-router
const router = new VueRouter({
    routes
});
// 配置store
const store = new Vuex.Store(storeState);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')