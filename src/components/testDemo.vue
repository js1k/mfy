<template>
    <div>
        <div>{{computedCount}}</div>
    </div>
</template>
<script>
export default {
    props: {
        factor: {type: Number, default: 1}
    },
    data () {
        return {
            count: 0
        };
    },
    computed: {
        computedCount: function () {
            return this.count * this.factor;
        }
    },
    mounted () {

    },
    methods: {
        inc () {
            this.count++;
        },
        dec () {
            this.count--;
        },
        reset () {
            this.count = 0;
        }
    }
};
</script>
