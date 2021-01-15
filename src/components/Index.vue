<template>
<div>
    <div class="loader" v-if="isLoading">
        <Loader :isShow="isLoading" />
    </div>
    <div v-else id="wrap-covid">
        <div class="container">
            <div class="wrap-covid__title-cate">
                "Covid-19 TREN THE GIOI"
            </div>
            <div class="wrap-covid__value-covid">
                TÍnh đến {{date}} có tổng cộng {{totalConfirmed}} người nhiễm
            </div>
            <div class="wrap-covid__data-covid">
                <ValueCovid 
                    :nameValue="'Nhiễm'"
                    :value="totalConfirmed" 
                    :degreeValue="newConfirmed"
                />
                <ValueCovid 
                    :nameValue="'Tử vong'"
                    :value="totalDeaths" 
                    :degreeValue="newDeaths"
                />
                <ValueCovid 
                    :nameValue="'Khỏi'"
                    :value="totalRecovered" 
                    :degreeValue="newRecovered"
                />
            </div>
            <div class="wrap-covid__table">
                <TableCovid :listArray="country"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios  from 'axios';
import Loader from '../components/Loader/Loader'
import ValueCovid from '../components/Value/ValueCovid'
import TableCovid from '../components/Table/TableCovid'
export default {
    name: 'Index',
    data: () => ({
        urlEndpoint:'https://api.covid19api.com/summary',
        date:'',
        global:{},
        country:[],
        search:'',
        isLoading:false
    }),
    components: {
        ValueCovid,
        TableCovid,
        Loader,
    },
    computed: {
        totalConfirmed() {
            return this.formatNumber(this.global.TotalConfirmed)
        },
        newConfirmed() {
            return this.global.NewConfirmed;
        },
        newDeaths() {
            return this.global.NewDeaths;
        },
        totalDeaths() {
            return this.global.TotalDeaths;
        },
        newRecovered() {
            return this.global.NewRecovered;
        },
        totalRecovered() {
            return this.global.TotalRecovered;
        },
    },
    created() {
        this.callData()
    },
    methods: {
        async callData() {
            this.isLoading = true
            try {
                const { data } = await axios.get(this.urlEndpoint);
                    this.isLoading = false
                    this.date =new Date(data.Date).toLocaleDateString();
                    this.global = data.Global;
                    this.country = data.Countries
                } catch (error) {
                    this.isLoading = false
                    return false;
                }
        },

        formatNumber(num) {
            const number = new Intl.NumberFormat().format(num);
            return number;
        }
    },
}
</script>

<style lang='scss' src='./index.scss'>
</style>

