<template>
    <div class="wrap-covid__table-covid">
        <div class="wrap-covid__table-title">
            THỐNG KÊ THEO QUỐC GIA
        </div>
        <input placeholder="Nhập tên quốc gia" type="text" v-model="search" class="wrap-covid__search-input">
        <div class="wrap-covid__table-content">
            <table style="width=100%">
                <thead>
                    <tr>
                        <th>Quốc gia</th>
                        <th>Nhiễm</th>
                        <th>Mới</th>
                        <th>Tử vong</th>
                        <th>Khỏi</th>
                    </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(item, idx) in filteredItems"
                    :key="idx">
                    <td>{{ item.Country }}</td>
                    <td>{{ item.TotalConfirmed }}</td>
                    <td>{{ item.NewConfirmed }}</td>
                    <td>{{ item.TotalDeaths }}</td>
                    <td>{{ item.TotalRecovered }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TableCovid',
    data: () => ({
        search:'',
    }),
    props: {
        listArray: Array
    },
    components: {
    },
    computed: {
        filteredItems () {
            return this.listArray.filter(item => {
                return item.Country.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        }
    },
    created() {
    },
    methods: {
    },
}
</script>

<style lang='scss' src='./table-covid.scss'>
</style>