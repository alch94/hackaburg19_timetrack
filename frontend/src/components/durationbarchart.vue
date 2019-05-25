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
                var newData = [];
                var newX = [];

                var newArr = await a.getGroupedBy(this.separator);
                for (var prop in newArr) {
                    if (newArr[prop] != null) {
                        var newDur = newArr[prop].reduce((rv, x) => {
                            return rv + x.duration;
                        }, 0);
                        newData.push(newDur);
                        newX.push(prop);
                    }
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
