<template>
    <q-page class="q-pa-sm">
        <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
        <q-btn @click="fillData" icon="android" label="Load"/>
    </q-page>
</template>


<script>
    import * as a from '../axios'

    export default {
        data: function() {
            return {
                chartOptions: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: []
                    }
                },
                series: [{
                    name: 'series-1',
                    data: []
                }]
            }
        },
        methods: {
            async fillData() {
                // this.series[0]["data"] = [];
                // this.chartOptions["xaxis"]["categories"] = [];

                var newArr = await a.getGroupedBy('exename');
                console.log(newArr);
                for (var prop in newArr) {
                    if (newArr[prop] != null) {
                        var newDur = newArr[prop].reduce((rv, x) => {
                            return rv + x.duration;
                        }, 0);
                        this.series[0]["data"].push(newDur);
                        this.chartOptions["xaxis"]["categories"].push(prop);
                    }
                }
            }
        }
    }
</script>

<style>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>
