<template>
    <div class="wrap-covid__total-confirm"
    style="{backgroundColor: color}"
    >
        <h2>{{nameValue}}</h2>
        <strong>{{value}}</strong>
        <div>+{{degreeValue}}</div>
    </div>
</template>
<script>
export default {
    name: 'ValueCovid',
    data: () => ({
    }),
    props: {
        nameValue: String,
        value: Number,
        degreeValue: Number,
        color: String
    },
    components: {
    },
    computed: {

    },
    created() {
    },
    methods: {
    },
}
</script>

<style lang='scss' src='./value-covid.scss'>
</style>