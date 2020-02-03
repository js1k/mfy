<template>
    <div class="header-tab-com">
        <div class="content">
            <div class="back-icon flx-ce-ce">
                <img src="../assets/img/back.png">
                <span>返回</span>
            </div>
            <div class="header-content flx-ce-ce">{{title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data () {
        return {

        };
    },
    mounted () {

    },
    methdods: {

    }
};
</script>
<style lang="scss">
.header-tab-com{
    width:100%;
    height:88px;
    .content{
        width:100%;
        height:100%;
        background:rgba(64,128,202,1);
        position: relative;
        .back-icon{
            position: absolute;
            left:18px;
            top:24px;
            img{
                width:22px;
                height:40px;
                margin-right:8px;
            }
            span{
                font-size:28px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
        }
    }
    .header-content{
        width:100%;
        height:100%;
        font-size:36px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        padding:0 40px;
    }
}
</style>
