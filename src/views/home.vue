<template>
    <div class="home-pages">
        <div class="nav-header flx-ce-bet">
            <div class="per-content">
                <img src="../assets/img/nav_per.png.png">
            </div>
            <div class="nav-tab flx-ce-ce">
                <div v-for="(item,index) in navTab"
                    :key="index"
                    class="flx-ce-ce"
                    :class="{'active-nav':navIndex==index}"
                    @click="toggleNav(index)">颜控</div>
            </div>
            <div class="news-content">
                <img src="../assets/img/news_icon.png.png">
                <p class=" flx-ce-ce">2</p>
            </div>
        </div>
        <div class="filter-content flx-ce-bet">
            <div v-for="(item,index) in filterTab"
                :key="index"
                class="filter-tab flx-ce-ce"
                :class="{'active-filter':filterIndex==index}"
                @click="filterIndex=index">{{item.name}}</div>
        </div>
        <div class="face-content" v-if="navIndex==0">
            <div class="face-section">
                <div class="bottom-bg"></div>
                <div class="second-bg"></div>
                <div class="top-bg">
                    <div class="main-section flx-ce-bet">
                        <div class="main-pic">
                            <img src="../assets/img/timg (2).jpg">
                        </div>
                        <div class="side-pic">
                            <div>
                                <img src="../assets/img/timg (1).jpg">
                            </div>
                            <div>
                                <img src="../assets/img/timg (3).jpg">
                            </div>
                        </div>
                    </div>
                    <div class="count-words flx-ce-sta">你能不能用一句话来抓住我的心</div>
                </div>
            </div>
            <div class="face-footer flx-ce-ce">
                <img src="../assets/img/trasfer_icon.png.png" class="trans-icon">
                <img src="../assets/img/close_icon.png.png" class="close-icon">
                <img src="../assets/img/love_icon.png.png" class="love-icon">
                <img src="../assets/img/email_icon.png.png" class="close-icon">
                <img src="../assets/img/lunch_icon.png.png" class="trans-icon">
            </div>
        </div>
        <div class="voice-content" v-if="navIndex==1">
            <div class="voice-section flx-ce-bet">
                <div class="section-left"></div>
                <div class="section-body">
                    <div class="voice-header">
                        <img src="../assets/img/timg (1).jpg">
                        <p>妲己娘娘</p>
                    </div>
                    <div class="per-label flx-ce-bet">
                        <div class="flx-ce-ce"
                            v-for="(item,index) in labelArr"
                            :key="index">{{item.name}}</div>
                    </div>
                </div>
                <div class="section-right"></div>
            </div>
            <div class="voice-lunch flx-ce-ce">
                <img src="../assets/img/big_lunch.png.png">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navIndex: 0,
            filterIndex: 0,
            navTab: [
                {name: '颜控', prop: 0},
                {name: '声控', prop: 1}
            ],
            filterTab: [
                {name: '全部', prop: 0},
                {name: '颜控', prop: 1},
                {name: '人气', prop: 2},
                {name: '活跃', prop: 3},
                {name: '朋友', prop: 4}
            ],
            labelArr: [
                {name: '音乐', prop: 0},
                {name: '小姐姐', prop: 1},
                {name: '维密秀', prop: 2},
                {name: '音乐', prop: 3}
            ]
        };
    },
    methods: {
        toggleNav (val) {
            this.navIndex = val;
        }
    }
};
</script>
<style lang="scss">
    .home-pages{
        width:100%;
        height:100%;
        background:rgba(240,240,240,1);
        .nav-header{
            width:100%;
            padding:20px 18px;
            background:linear-gradient(135deg,rgba(255,63,112,1),rgba(252,91,100,1));
            .per-content{
                img{
                    width:50px;
                    height:48px;
                }
            }
            .nav-tab{
                div{
                    width:150px;
                    height:56px;
                    font-size:34px;
                    font-family:PingFang SC;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    background:rgba(221,68,91,1);
                }
                .active-nav{
                    background:rgba(252,116,135,1);
                }
                div:nth-child(1){
                    border-radius:28px 0px 0px 28px;
                }
                div:nth-child(2){
                    border-radius:0px 28px 28px 0px;
                }
            }
            .news-content{
                position: relative;
                img{
                    width:50px;
                    height:48px;
                }
                p{
                    width:26px;
                    height:26px;
                    border-radius: 50%;
                    background:#fff;
                    position: absolute;
                    top:-10px;
                    right:-10px;
                    font-size:24px;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(255,63,112,1);
                }
            }
        }
        .filter-content{
            width:100%;
            padding:38px 22px;
            overflow-x: scroll;
            .filter-tab{
                width:122px;
                height:52px;
                border:1px solid rgba(253,148,175,1);
                border-radius:26px;
                font-size:32px;
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(253,148,175,1);
            }
            .active-filter{
                background:linear-gradient(135deg,rgba(255,63,112,1),rgba(252,91,100,1));
                color:#fff;
            }
        }
        .face-content{
            width:100%;
            padding:0 24px;
            .face-section{
                width:100%;
                height:850px;
                // padding: 0 24px;
                position: relative;
                .bottom-bg{
                    width:636px;
                    height:850px;
                    background:#fff;
                    top:0;
                    left: 35px;
                    position: absolute;
                    z-index: 1;
                    border-radius:12px;
                }
                .second-bg{
                    width:672px;
                    height:830px;
                    background: #fff;
                    position: absolute;
                    top:0;
                    left: 17px;
                    z-index: 2;
                    border-radius:12px;
                }
                .top-bg{
                    width:706px;
                    height:800px;
                    background: #fff;
                    position: absolute;
                    top:0;
                    left: 0px;
                    z-index: 2;
                    border-radius:12px;
                    .main-section{
                        width:100%;
                        height:650px;
                        .main-pic{
                            img{
                                width:100%;
                                height:100%;
                                min-width:466px;
                                max-height:650px;
                            }
                        }
                        .side-pic{
                            div{
                                border:1px solid #fff;
                            }
                            img{
                                width:234px;
                                height:324px;
                            }
                        }
                    }
                    .count-words{
                        width:100%;
                        height:148px;
                        font-size:34px;
                        font-family:PingFang SC;
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                        padding-left:22px;
                    }
                }
            }
            .face-footer{
                width:100%;
                padding:39px 0;
                img{
                    margin-right:10px;
                }
                img:nth-child(5){
                    margin-right:0
                }
                .trans-icon{
                    width:120px;
                    height:120px;
                }
                .close-icon{
                    width:140px;
                    height:140px;
                }
                .love-icon{
                    width:170px;
                    height:170px;
                }
            }
        }
        .voice-content{
            padding-top:47px;
            .voice-section{
                width:100%;
                height:822px;
                .section-left{
                    width:63px;
                    height:690px;
                    background:rgba(0,0,0,1);
                    opacity:0.2;
                    border-radius:16px;
                }
                .section-body{
                    width:562px;
                    height:822px;
                    padding-top:133px;
                    background:url('../assets/img/voice_bg.png.png') no-repeat;
                    background-size:100% 100%;
                    position: relative;
                    .voice-header{
                        position: absolute;
                        left:222px;
                        top:-59px;
                        img{
                            width:118px;
                            height:118px;
                            border-radius: 50%;
                        }
                        p{
                            margin-top:20px;
                            font-size:32px;
                            font-family:PingFang SC;
                            font-weight:bold;
                            color:rgba(255,255,255,1);
                        }
                    }
                    .per-label{
                        width:100%;
                        padding:23px 20px 0;
                        div{
                            height:44px;
                            border:2px solid rgba(255,255,255,1);
                            opacity:0.8;
                            border-radius:22px;
                            font-size:30px;
                            font-family:PingFang SC;
                            font-weight:bold;
                            color:rgba(255,255,255,1);
                            opacity:0.8;
                            padding:0 10px;
                        }
                    }
                }
                .section-right{
                    width:63px;
                    height:690px;
                    background:rgba(0,0,0,1);
                    opacity:0.2;
                    border-radius:16px;
                }
            }
            .voice-lunch{
                width:100%;
                padding:19px 0;
                img{
                    width:180px;
                    height:180px;
                }
            }
        }
    }
</style>
