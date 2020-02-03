<template>
    <div>{{count}}</div>
</template>
<script>
export default {
    data () {
        return {
            count: 0
        };
    },
    mounted () {
    },
    methods: {
        inc () {
            this.count++;
        },
        reset () {
            this.count = 0;
        }
    }
};
</script>
<style lang="scss">

</style>
