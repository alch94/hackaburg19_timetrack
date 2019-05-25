<template>
    <q-page class="q-pa-sm">
        <q-table
                title="Table"
                :data="tableData"
                :columns="columns"
                :pagination.sync="paginationControl"
                :filter="filter"
                :visible-columns="visibleColumns"
                :separator="separator"
                :loading="loading"
                selection="multiple"
                :selected.sync="selected"
                row-key="id">
            <template slot="top-left" slot-scope="props">
                <q-search
                        hide-underline
                        color="secondary"
                        v-model="filter"
                        class="col-6"
                />
            </template>
            <template slot="top-right" slot-scope="props">
                <q-table-columns
                        color="secondary"
                        class="q-mr-sm"
                        v-model="visibleColumns"
                        :columns="columns"
                />
                <q-select
                        color="secondary"
                        v-model="separator"
                        :options="[
          { label: 'Horizontal', value: 'horizontal' },
          { label: 'Vertical', value: 'vertical' },
          { label: 'Cell', value: 'cell' },
          { label: 'None', value: 'none' }
        ]"
                        hide-underline
                />
                <q-btn
                        flat round dense
                        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                        @click="props.toggleFullscreen"
                />
            </template>
            <!-- gets displayed only when there's at least one row selected -->
            <template slot="top-selection" slot-scope="props">
                <q-btn color="secondary" flat label="Action 1" class="q-mr-sm" />
                <q-btn color="secondary" flat label="Action 2" />
                <div class="col" />
                <q-btn color="negative" flat round delete icon="delete" @click="deleteRow" />
            </template>
        </q-table>
        <q-btn @click="loadActivities" icon="mdi-plus" label="Load Activities"/>
    </q-page>
</template>

<script>
    import {API} from '../axios'
    import {TESTDATA} from './testData'

    export default {
        data: () => ({
            loading: false,
            paginationControl: {rowsPerPage: 100, page: 1},
            columns: [
                {
                    name: 'userid',
                    label: 'User',
                    align: 'left',
                    field: 'userid',
                    sortable: true,
                    classes: 'my-class',
                    style: 'width: 500px'
                },
                {
                    name: 'deviceid',
                    label: 'Device',
                    align: 'left',
                    field: 'deviceid',
                    sortable: true
                },
                {
                    name: 'ostype',
                    label: 'OS',
                    align: 'left',
                    field: 'ostype',
                    sortable: true,
                    // format: val => val.toLowerCase().startsWith("w") ?
                },
                {
                    name: 'exename',
                    label: 'EXE',
                    align: 'left',
                    field: 'exename',
                    sortable: true
                },
                {
                    name: 'windowtitle',
                    required: true,
                    label: 'Caption',
                    align: 'left',
                    field: 'windowtitle',
                    sortable: true
                },
                {
                    name: 'starttime',
                    label: 'Start',
                    align: 'left',
                    field: 'starttime',
                    sortable: true
                },
                {
                    name: 'endtime',
                    label: 'End',
                    align: 'left',
                    field: 'endtime',
                    sortable: true
                },
                {
                    name: 'duration',
                    label: 'Duration',
                    align: 'left',
                    field: 'duration',
                    sortable: true
                }
            ],
            // tableData: []
            tableData: TESTDATA,
            visibleColumns: [
                'userid',
                // 'deviceid',
                'ostype',
                'exename',
                'windowtitle',
                'starttime',
                // 'endtime',
                'duration'
            ],
            separator: 'horizontal',
            filter: '',
            selected: []
        }),
        methods: {
            loadActivities: function () {
                this.loading = true;
                this.tableData = [];
                API.get('activities').then(response => {
                    // console.log(response);
                    response.data.forEach(elem => {
                        this.tableData.push(elem);
                    });
                    this.loading = false;
                }).catch(err => {
                    console.log(err);
                    this.loading = false;
                });
            }
        }
    }
</script>