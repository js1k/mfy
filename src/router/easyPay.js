const easyPay = r => require.ensure([], () => r(require('../views/easyPay/easyPay.vue')), 'easyPay');
const easyDetail = r => require.ensure([], () => r(require('../views/easyPay/easyDetail.vue')), 'easyDetail');
const HelloWorld = r => require.ensure([], () => r(require('../components/HelloWorld.vue')), 'HelloWorld');
const countDetails = r => require.ensure([], () => r(require('../views/easyPay/countDetails.vue')), 'countDetails');

export default[
    {
        path: '/easyPay',
        name: 'easyPay',
        component: easyPay
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/easyDetail',
        name: 'easyDetail',
        component: easyDetail
    },
    {
        path: '/countDetails',
        name: 'countDetails',
        component: countDetails
    }
]
;
