<template>
    <q-page class="q-pa-sm">
        <q-select
                color="secondary"
                v-model="separator"
                @input="modelChanged"
                :options="[
          { label: 'EXE', value: 'exename' },
          { label: 'OS', value: 'ostype' },
          { label: 'User', value: 'userid' },
          { label: 'Device', value: 'deviceid' }
        ]"
                hide-underline
        />
        <q-select
            color="secondary"
            v-model="chartType"
            @input="chartTypeChanged"
            :options="[
          { label: 'Line', value: 'line' },
          { label: 'Bar', value: 'bar' },
          { label: 'Area', value: 'area' }
        ]"
            hide-underline
    />
        <apexchart width="800" type="bar" :options="chartOptions" :series="series"></apexchart>
        <q-btn @click="fillData" icon="android" label="Load"/>
    </q-page>
</template>


<script>
    import * as a from '../axios'

    export default {
        data: function() {
            return {
                separator: 'exename',
                chartType: 'bar',
                chartOptions: {
                    chart: {
                        id: 'vuechart-example',
                        type: "bar"
                    },
                    xaxis: {
                        categories: []
                    }
                },
                series: [{
                    name: 'time',
                    data: []
                }]
            }
        },
        mounted() {
            this.fillData();
            setInterval(function () {
                this.fillData();
                console.log("Load Activities Periodically");
            }.bind(this), 3000);
        },
        methods: {
            chartTypeChanged() {
                this.chartOptions = {
                    chart: {
                        type: this.chartType
                    }
                };
                this.fillData();
            },
            modelChanged() {
                this.fillData();
            },
            async fillData() {
                var newArr = await a.getGroupedBy(this.separator);
                var newNewArr = [];
                for (var prop in newArr) {
                    if (newArr[prop] != null) {
                        var newDur = newArr[prop].reduce((rv, x) => {
                            return rv + (x.duration != null ? x.duration : 0);
                        }, 0);
                        newArr["newDur"] = newDur;
                        newNewArr.push({"key": prop, "newDur": newDur});
                    }
                }
                var newData = [];
                var newX = [];
                newNewArr.sort((a,b) => a.newDur - b.newDur);
                for (let p in newNewArr) {
                    newData.push(newNewArr[p].newDur);
                    newX.push(newNewArr[p].key);
                }

                // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
                this.chartOptions = {
                    xaxis: {
                        categories: newX
                    }
                };
                // In the same way, update the series option
                this.series = [{
                    data: newData
                }]
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
