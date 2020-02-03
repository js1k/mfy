import Vue from 'vue';
import Router from 'vue-router';
import homepage from '../views/home.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/navigate'
        }, {
            path: '/homepage',
            name: 'homepage',
            component: homepage
        }
    ]
});
