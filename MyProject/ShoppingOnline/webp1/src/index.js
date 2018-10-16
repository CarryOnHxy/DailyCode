import Vue from 'vue';
import VueRouter from 'vue-router';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import VueResource from 'vue-resource';

import store from './store/store'
import routes from './router/routerMap.js'
import app from './components/app.vue';

Vue.use(VueResource);
Vue.use(VueRouter);
var router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    render(a) {
        return a(app);
    },
    router,
    store
})