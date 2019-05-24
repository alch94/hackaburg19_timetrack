<template>
    <q-page class="q-pa-sm">
        <gantt-elastic
                :options="options"
                :tasks="tasks"
                @tasks-changed="tasksUpdate"
                @options-changed="optionsUpdate"
                @dynamic-style-changed="styleUpdate"
        >
            <gantt-header slot="header"></gantt-header>
        </gantt-elastic>
        <div class="q-mt-md" />
        <q-btn @click="addTask" icon="mdi-plus" label="Add task" />
        <q-btn @click="loadActivities" icon="mdi-plus" label="Load Tasks" />
        <q-btn @click="insertTestData" icon="mdi-plus" label="Testdaten einfuegen" />
    </q-page>
</template>

<style>
</style>

<script>
    import GanttElastic from "gantt-elastic";
    import GanttHeader from "gantt-elastic-header";
    // import dayjs from "dayjs";

    // just helper to get current dates
    function getDate(hours) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();
        const timeStamp = new Date(
            currentYear,
            currentMonth,
            currentDay,
            0,
            0,
            0
        ).getTime();
        return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
    }
    let tasks = [
        {
            id: 2,
            label: "With great power comes great responsibility",
            user:
                '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
            parentId: 1,
            start: getDate(-24 * 4),
            duration: 4 * 24 * 60 * 60 * 1000,
            percent: 50,
            type: "milestone",
            collapsed: true,
            style: {
                base: {
                    fill: "#1EBC61",
                    stroke: "#0EAC51"
                }
            }
        },
        {
            id: 3,
            label: "Courage is being scared to death, but saddling up anyway.",
            user:
                '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
            parentId: 2,
            start: getDate(-24 * 3),
            duration: 2 * 24 * 60 * 60 * 1000,
            percent: 100,
            type: "task"
        },
        {
            id: 4,
            label: "Put that toy AWAY!",
            user:
                '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
            start: getDate(-24 * 2),
            duration: 2 * 24 * 60 * 60 * 1000,
            percent: 50,
            type: "task",
            dependentOn: [3]
        }
    ];
    let options = {
        taskMapping: {
            progress: "percent"
        },
        maxRows: 100,
        maxHeight: 500,
        title: {
            label: "Your project title as html (link or whatever...)",
            html: false
        },
        row: {
            height: 24
        },
        times: {
            timeScale: 1000,
            timeZoom: 17, //*
        },
        calendar: {
            hour: {
                display: true
            }
        },
        chart: {
            progress: {
                bar: false
            },
            expander: {
                display: true
            }
        },
        taskList: {
            expander: {
                straight: false
            },
            columns: [
                {
                    id: 2,
                    label: "Description",
                    value: "windowtitle",
                    width: 200,
                    expander: true,
                    // html: true,
                    events: {
                        click({ data, column }) {
                            alert("description clicked!\n" + data.label + column);
                        }
                    }
                }
            ]
        },
        locale: {
            name: "en",
            Now: "Now",
            "X-Scale": "Zoom-X",
            "Y-Scale": "Zoom-Y",
            "Task list width": "Task list",
            "Before/After": "Expand",
            "Display task list": "Task list"
        }
    };

    import {API} from '../axios'
    import {TESTDATA} from './testData'

    export default {
        name: "Gantt",
        components: {
            GanttElastic,
            GanttHeader
        },
        data() {
            return {
                tasks,
                options,
                dynamicStyle: {},
                lastId: 16
            };
        },
        methods: {
            addTask() {
                // this.tasks.push({
                //     id: this.lastId++,
                //     label:
                //         '<a href="https://images.pexels.com/photos/423364/pexels-photo-423364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank" style="color:#0077c0;">Yeaahh! you have added a task bro!</a>',
                //     user:
                //         '<a href="https://images.pexels.com/photos/423364/pexels-photo-423364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank" style="color:#0077c0;">Awesome!</a>',
                //     start: getDate(24 * 3),
                //     duration: 1 * 24 * 60 * 60 * 1000,
                //     percent: 50,
                //     type: "project"
                // });
                API.post(`activity`);
            },
            tasksUpdate(tasks) {
                this.tasks = tasks;
            },
            optionsUpdate(options) {
                this.options = options;
            },
            styleUpdate(style) {
                this.dynamicStyle = style;
            },
            loadActivities: function () {
                // this.loading = true;

                API.get('activities').then(response => {
                    console.log(response);
                    response.data.forEach(elem => {
                        this.tasks.push({
                            id: elem.id,
                            label: elem.exename + " - " + elem.windowtitle,
                            user: '<a href="https://images.pexels.com/photos/423364/pexels-photo-423364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank" style="color:#0077c0;">' + elem.user + '</a>',
                            start: elem.starttime,
                            duration: 0,
                            percent: 50,
                            type: "project"
                        });
                    });
                }).catch(err => {
                    console.log(err);
                });
                // API.get('activities')
                //     .then(function (response)  {
                //         console.log('test');
                //         this.loading = false;
                //         // console.log(response.data);
                //         this.tasks.push(response.data);
                //     }).catch(function(error) {
                //         // eslint-disable-next-line no-console
                //         console.log(error);
                //         this.loading = false;
                //     });
            },
            insertTestData: function () {
                API.get('deleteall').then(response => {
                    console.log('Deleted!');
                    TESTDATA.forEach(elem => {
                        API.post('/activity', {
                            "userid": elem.userid,
                            "deviceid": elem.deviceid,
                            "starttime": elem.starttime,
                            "endtime": elem.endtime,
                            "ostype": elem.ostype,
                            "exename": elem.exename,
                            "windowtitle": elem.windowtitle,
                            "duration": elem.duration
                        }).then(response => {
                            console.log(response);
                        }).catch(err => {
                            console.log(err);
                        });
                    });
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    };
</script>
