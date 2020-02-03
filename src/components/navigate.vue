<template>
    <div class="nav-pages">
        <div class="nav-list">
            <p class="flx-ce-sta re-after-line"
                v-for="(item,index) in pageList"
                :key="index"
                @click="goPages(item.path)">{{item.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            pageList: [{
                name: '分部对账页面',
                path: '/comeGo'
            }, {
                name: '无忧赔付',
                path: '/easyPay'
            }]
        };
    },
    mounted () {

    },
    methods: {
        goPages (path) {
            this.$router.push({
                path: path
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.nav-pages{
    width:100%;
    .nav-list{
        width:100%;
        p{
            height:88px;
            color:#4080ca;
            font-size: 32px;
            padding:30px;
        }
        p:nth-child(odd){
            // background:#ececec;
        }
    }
}
</style>
