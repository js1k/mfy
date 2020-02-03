import {
    throttle
} from './utils';
import { _comeGoImg } from './speMet';
export default {
    comeGoImg: _comeGoImg,
    waybillNoLowToUp (waybillNo) {
        let w = waybillNo.toUpperCase();
        return w;
    },
    minTime () {
        let time = new Date();
        let hous = time.getHours();
        let mint = time.getMinutes();
        if (mint < 10) {
            mint = '0' + mint.toString();
        } else {
            mint = mint + '';
        }
        if (mint[1] < 5) {
            mint = '' + mint[0] + '0';
        } else {
            mint = '' + mint.toString()[0] + '5';
        }
        return (hous + ':' + mint);
    },
    // 监控页面滚动处理
    _domListen () {
        window.onscroll = throttle(function () {
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            const el = document.querySelector('.v-table-header');
            const el2 = document.querySelector('.time');
            const el3 = document.querySelector('.tab-content');
            if (t > 135) {
                el.setAttribute('class', 'v-table-header v-table-title-class head-fixed');
                el2.setAttribute('class', 'time time-fixed');
                if (el3) el3.setAttribute('class', 'tab-content tab-fixed');
            } else {
                el.setAttribute('class', 'v-table-header v-table-title-class');
                el2.setAttribute('class', 'time');
                if (el3) el3.setAttribute('class', 'tab-content');
            }
        }, 200);
    },
    // 管控、监测页面滚动处理
    _controlScroll () {
        let tablePart = document.getElementById('tablePart');
        let table = document.getElementsByClassName('v-table-header v-table-title-class');
        let body = document.getElementsByClassName('v-table-body v-table-body-class v-table-rightview-special-border v-scrollbar-wrap');
        if (tablePart.getBoundingClientRect().top <= 0) {
            table[0].style.position = 'fixed';
            table[0].style.top = 0 + 'px';
            table[0].style.zIndex = 2;
            body[0].style.marginTop = table[0].offsetHeight + 'px';
        } else {
            table[0].style.position = 'static';
            body[0].style.marginTop = 0 + 'px';
        }
    },
    //  调用APP方法 显示title tab 问号 icon
    _isShowQuestionMark (type) {
        // 是否关闭指标说明问号 true 显示 false隐藏const UA = window.navigator.userAgent
        const UA = window.navigator.userAgent;
        const isIpad = /(iPad).*OS\s([\d_]+)/.test(UA);
        const isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(UA);
        const isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(UA);
        const isIos = isIpad || isIpod || isIphone;
        const isAndroid = /(Android);?[\s\/]+([\d.]+)?/.test(UA);
        try {
            if (isAndroid) {
                if (window.nativeBridge != null && typeof (window.nativeBridge) !== 'undefined') {
                    window.nativeBridge.isShow(type);
                }
            }
            if (isIos) {
                if (window.webkit.messageHandlers.isShow != null && typeof (window.webkit.messageHandlers.isShow) !== 'undefined') {
                    window.webkit.messageHandlers.isShow.postMessage(type);
                }
            }
        } catch (error) {
            console.log('调用问号显示隐藏方法失败');
        }
    },
    // 设置默认初始开始结束日期
    initDate (start, end, step) {
        let endDate = this._setToday();
        let endTimestamp = this._dateTotimestamp(endDate);
        let setpTime = step ? step * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000;
        let startDate = this._timestampToDate(endTimestamp - setpTime);
        let tempObj = {};
        tempObj[start] = startDate;
        tempObj[end] = endDate;
        return tempObj;
    },
    // 获取当前时间日期格式
    _setToday () {
        let now = new Date();
        let cmonth = now.getMonth() + 1;
        let day = now.getDate();
        if (cmonth < 10) cmonth = '0' + cmonth;
        if (day < 10) day = '0' + day;
        return now.getFullYear() + '-' + cmonth + '-' + day;
    },
    // 年月日转换成时间戳
    _dateTotimestamp (val) {
        let date = new Date(val);
        return date.getTime();
    },
    // 时间戳转换成日期
    _timestampToDate (val) {
        var now = new Date(val),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();
        return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + '';
    },
    _comeGoImg (value) {
        let valArr = ['运费', '派送费', '代收货款费', '超区费', '物料费', '退件费', '充值', '其他费用'];
        let imgArr = ['yunfei', 'paisong', 'daishou', 'chaoqu', 'wuliao', 'tuijian', 'chongzhi', 'other'];
        let val = imgArr[valArr.indexOf(value)];
        // return val;
        return '@/assets/img/bill/icon_' + val + '.png';
    },
    preventHandle (el) {
        el.cancelBubble = true;
    }
};
