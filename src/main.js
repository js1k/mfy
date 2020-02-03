// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import publicMethods from '../src/lib/publicMethods';
import serverApi from './server/server';
import {nativeApp$} from './lib/nativeUtil';
import FastClick from 'fastclick';
import '@/assets/css/common.scss';
import '@/assets/css/v-table.scss';
import { AlertPlugin, ConfirmPlugin, LoadingPlugin, ToastPlugin, WechatPlugin, DatetimePlugin } from 'vux';
import 'vue-easytable/libs/themes-base/index.css';
import {VTable} from 'vue-easytable';
import {
    JsBridge
} from './lib/native';
    //  修复因引入FastClick导致输入框不能聚焦问题
FastClick.prototype.focus = function (targetElement) {
    targetElement.selectionStart = targetElement.selectionEnd = targetElement.value.length;
    targetElement.focus();
};
FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.prototype.$public = publicMethods;
Vue.prototype.$serverApi = serverApi;
Vue.prototype.$bridge = JsBridge;

// plugins
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin);
Vue.use(WechatPlugin);
Vue.use(DatetimePlugin);
Vue.component(VTable.name, VTable);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
nativeApp$();
