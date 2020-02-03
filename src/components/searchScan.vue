<template>
    <div class="search-con flx-ce-bet re-after-line">
        <div class="search flx-ce-sta">
            <img src="../assets/img/icon_search.png" class="search-icon">
            <div>
                <input type="text"
                    placeholder="请输入运单号查询"
                    v-model="billNo"
                    @blur="$emit('change', billNo)">
            </div>
        </div>
        <img src="../assets/img/scan_icon.png" class="scan">
    </div>
</template>
<script>
export default {
    model: {
        prop: 'billNo',
        event: 'change'
    },
    props: {
        billNo: String
    },
    data () {
        return {

        };
    },
    methods: {

    }
};
</script>
<style lang="scss" scoped>
.search-con{
    width:100%;
    padding:15px 30px;
    background:#fff;
    .search{
        width:100%;
        height:58px;
        background:rgba(245,245,245,1);
        border-radius:29px;
        padding:0 22px;
        margin-right:30px;
        div{
            width:100%;
            height:100%;
            input{
                width:100%;
                height:100%;
                background:none;
                outline: none;
                border:none;
            }
        }
        .search-icon{
            width:32px;
            height:32px;
            margin-right:18px;
        }
    }
    .scan{
        width:44px;
        height:44px;
    }
}
</style>
