var apps = ["Outlook", "explorer", "Notepad++"];
var titles = ["AW: Cheffe", "C:\\Windows", "main.cpp"];

var test = [];
for (let i = 0; i < 20; i++) {
    test.push({
        "id": i,
        "userid": "markus",
        "deviceid": "surface",
        "starttime": "2019-05-24T19:0" + i + ":01.13",
        "endtime": "2019-05-25T19:0" + (i+2) + ":01.13",
        "ostype": "windows",
        "exename": apps[i%3],
        "windowtitle": titles[i%3],
        "duration": 120
    })
}

export const TESTDATA = [{"id":1,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,26,56,974437000],"endtime":[2019,5,25,1,27,1,325367000],"ostype":"WINDOWS","exename":"tracky_win_daemon","windowtitle":"TrackyWinDaemon","duration":4},{"id":2,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,27,1,325367000],"endtime":[2019,5,25,1,27,39,793274000],"ostype":"WINDOWS","exename":"rider64","windowtitle":"TrackWinDaemon [C:\\projects\\hackaburg19_timetrack\\win_daemon] - ...\\tracky_win_daemon\\Rest.cs - JetBrains Rider","duration":38},{"id":3,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,27,39,793274000],"endtime":[2019,5,25,1,27,59,64070000],"ostype":"WINDOWS","exename":"Postman","windowtitle":"Postman","duration":19},{"id":4,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,27,59,64070000],"endtime":[2019,5,25,1,28,33,488723000],"ostype":"WINDOWS","exename":"rider64","windowtitle":"TrackWinDaemon [C:\\projects\\hackaburg19_timetrack\\win_daemon] - ...\\tracky_win_daemon\\Rest.cs - JetBrains Rider","duration":34},{"id":5,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,28,33,488723000],"endtime":[2019,5,25,1,29,39,222555000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"frontend - Mozilla Firefox","duration":65},{"id":6,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,29,39,222555000],"endtime":[2019,5,25,1,29,39,285387000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"","duration":0},{"id":7,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,29,39,285387000],"endtime":[2019,5,25,1,29,39,352773000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"Task Switching","duration":0},{"id":8,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,29,39,352773000],"endtime":[2019,5,25,1,29,39,422611000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"","duration":0},{"id":9,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,29,39,422611000],"endtime":[2019,5,25,1,29,41,382367000],"ostype":"WINDOWS","exename":"rider64","windowtitle":"TrackWinDaemon [C:\\projects\\hackaburg19_timetrack\\win_daemon] - ...\\tracky_win_daemon\\App.config - JetBrains Rider","duration":1},{"id":10,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,29,41,382367000],"endtime":[2019,5,25,1,29,41,545573000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"","duration":0},{"id":11,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,29,41,545573000],"endtime":[2019,5,25,1,29,41,572074000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"Task Switching","duration":0},{"id":12,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,29,41,572074000],"endtime":[2019,5,25,1,29,41,595013000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"","duration":0},{"id":13,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,29,41,595013000],"endtime":[2019,5,25,1,30,14,918444000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"quasar - Google Search - Mozilla Firefox","duration":33},{"id":14,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,30,14,918444000],"endtime":[2019,5,25,1,30,16,80334000],"ostype":"WINDOWS","exename":"idea64","windowtitle":"timetracker [C:\\projects\\hackaburg19_timetrack\\api_java] - ...\\src\\main\\java\\timetracker\\timetracker\\WebConfig.java [timetracker] - IntelliJ IDEA","duration":1},{"id":15,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,30,16,80334000],"endtime":[2019,5,25,1,30,43,673422000],"ostype":"WINDOWS","exename":"webstorm64","windowtitle":"frontend [C:\\projects\\hackaburg19_timetrack\\frontend] - ...\\src\\components\\testData.js [frontend] - WebStorm","duration":27},{"id":16,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,30,43,673422000],"endtime":[2019,5,25,1,30,53,579311000],"ostype":"WINDOWS","exename":"Postman","windowtitle":"Postman","duration":9},{"id":17,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,30,53,579311000],"endtime":[2019,5,25,1,31,49,269963000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"Material Ripples - Quasar Framework - Mozilla Firefox","duration":55},{"id":18,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,31,49,269963000],"endtime":[2019,5,25,1,32,4,627932000],"ostype":"WINDOWS","exename":"webstorm64","windowtitle":"frontend [C:\\projects\\hackaburg19_timetrack\\frontend] - ...\\src\\components\\testData.js [frontend] - WebStorm","duration":15},{"id":19,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,4,627932000],"endtime":[2019,5,25,1,32,4,726654000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"","duration":0},{"id":20,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,4,726654000],"endtime":[2019,5,25,1,32,4,764875000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"","duration":0},{"id":21,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,4,764875000],"endtime":[2019,5,25,1,32,4,815528000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"","duration":0},{"id":22,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,4,815528000],"endtime":[2019,5,25,1,32,9,398534000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"Material Ripples - Quasar Framework - Mozilla Firefox","duration":4},{"id":23,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,9,398534000],"endtime":[2019,5,25,1,32,9,455383000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"","duration":0},{"id":24,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,9,455383000],"endtime":[2019,5,25,1,32,9,587159000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"Task Switching","duration":0},{"id":25,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,9,587159000],"endtime":[2019,5,25,1,32,9,641343000],"ostype":"WINDOWS","exename":"webstorm64","windowtitle":"","duration":0},{"id":26,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,9,641343000],"endtime":[2019,5,25,1,32,17,376874000],"ostype":"WINDOWS","exename":"webstorm64","windowtitle":"frontend [C:\\projects\\hackaburg19_timetrack\\frontend] - ...\\vue.config.js [frontend] - WebStorm","duration":7},{"id":27,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,17,376874000],"endtime":[2019,5,25,1,32,17,493562000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"","duration":0},{"id":28,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,17,493562000],"endtime":[2019,5,25,1,32,17,527631000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"","duration":0},{"id":29,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,17,527631000],"endtime":[2019,5,25,1,32,17,557935000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"","duration":0},{"id":30,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,32,17,557935000],"endtime":[2019,5,25,1,33,5,131353000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"Material Ripples - Quasar Framework - Mozilla Firefox","duration":47},{"id":31,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,33,5,131353000],"endtime":[2019,5,25,1,33,15,785721000],"ostype":"WINDOWS","exename":"ShellExperienceHost","windowtitle":"Windows Shell Experience Host","duration":10},{"id":32,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,33,15,785721000],"endtime":[2019,5,25,1,33,27,255636000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"Screen Plugin - Quasar Framework - Mozilla Firefox","duration":11},{"id":33,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,33,27,255636000],"endtime":[2019,5,25,1,33,27,314582000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"","duration":0},{"id":34,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,33,27,314582000],"endtime":[2019,5,25,1,33,27,368440000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"Task Switching","duration":0},{"id":35,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,33,27,368440000],"endtime":[2019,5,25,1,33,27,418835000],"ostype":"WINDOWS","exename":"explorer","windowtitle":"","duration":0},{"id":36,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,33,27,418835000],"endtime":[2019,5,25,1,33,37,374882000],"ostype":"WINDOWS","exename":"webstorm64","windowtitle":"frontend [C:\\projects\\hackaburg19_timetrack\\frontend] - ...\\vue.config.js [frontend] - WebStorm","duration":9},{"id":37,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,33,37,374882000],"endtime":[2019,5,25,1,33,37,996983000],"ostype":"WINDOWS","exename":"rider64","windowtitle":"TrackWinDaemon [C:\\projects\\hackaburg19_timetrack\\win_daemon] - ...\\tracky_win_daemon\\App.config - JetBrains Rider","duration":0},{"id":38,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,33,37,996983000],"endtime":[2019,5,25,1,33,41,136681000],"ostype":"WINDOWS","exename":"webstorm64","windowtitle":"frontend [C:\\projects\\hackaburg19_timetrack\\frontend] - ...\\vue.config.js [frontend] - WebStorm","duration":3},{"id":39,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,33,41,136681000],"endtime":[2019,5,25,1,34,14,420617000],"ostype":"WINDOWS","exename":"idea64","windowtitle":"timetracker [C:\\projects\\hackaburg19_timetrack\\api_java] - ...\\src\\main\\java\\timetracker\\timetracker\\WebConfig.java [timetracker] - IntelliJ IDEA","duration":33},{"id":40,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,34,14,420617000],"endtime":[2019,5,25,1,34,14,459872000],"ostype":"WINDOWS","exename":"idea64","windowtitle":"","duration":0},{"id":41,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,34,14,459872000],"endtime":[2019,5,25,1,35,13,814452000],"ostype":"WINDOWS","exename":"idea64","windowtitle":"timetracker [C:\\projects\\hackaburg19_timetrack\\api_java] - C:\\Program Files\\Java\\jdk1.8.0_201\\src.zip!\\java\\time\\LocalDateTime.java [1.8] - IntelliJ IDEA","duration":59},{"id":42,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,35,13,814452000],"endtime":[2019,5,25,1,35,20,908575000],"ostype":"WINDOWS","exename":"webstorm64","windowtitle":"frontend [C:\\projects\\hackaburg19_timetrack\\frontend] - ...\\vue.config.js [frontend] - WebStorm","duration":7},{"id":43,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,35,20,908575000],"endtime":[2019,5,25,1,35,31,660250000],"ostype":"WINDOWS","exename":"firefox","windowtitle":"Screen Plugin - Quasar Framework - Mozilla Firefox","duration":10},{"id":44,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,35,31,660250000],"endtime":[2019,5,25,1,36,15,676189000],"ostype":"WINDOWS","exename":"webstorm64","windowtitle":"frontend [C:\\projects\\hackaburg19_timetrack\\frontend] - ...\\vue.config.js [frontend] - WebStorm","duration":44},{"id":45,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,36,15,676189000],"endtime":[2019,5,25,1,36,20,14043000],"ostype":"WINDOWS","exename":"rider64","windowtitle":"TrackWinDaemon [C:\\projects\\hackaburg19_timetrack\\win_daemon] - ...\\tracky_win_daemon\\App.config - JetBrains Rider","duration":4},{"id":46,"userid":"markusmo3","deviceid":"surface","starttime":[2019,5,25,1,36,20,14043000],"endtime":null,"ostype":"WINDOWS","exename":"Postman","windowtitle":"Postman","duration":null}];
export const TESTDATA_OLD = [
    {
        "userid": "test5",
        "deviceid": null,
        "starttime": "2019-05-24T19:00:01.13",
        "endtime": "2019-05-24T19:10:01.13",
        "ostype": null,
        "exename": "Outlook.exe",
        "windowtitle": "AW: Cheffe",
        "duration": 120
    },
    {
        "userid": "test5",
        "deviceid": null,
        "starttime": "2019-05-24T19:10:01.13",
        "endtime": "2019-05-24T19:20:01.13",
        "ostype": null,
        "exename": "Notepad++.exe",
        "windowtitle": "main.cpp",
        "duration": 120
    },
    {
        "userid": "test5",
        "deviceid": null,
        "starttime": "2019-05-24T19:20:01.13",
        "endtime": "2019-05-24T19:30:01.13",
        "ostype": null,
        "exename": "Outlook.exe",
        "windowtitle": "AW: Cheffe",
        "duration": 120
    },
    {
        "userid": "test5",
        "deviceid": null,
        "starttime": "2019-05-24T19:30:01.13",
        "endtime": "2019-05-24T19:40:01.13",
        "ostype": null,
        "exename": "Notepad++.exe",
        "windowtitle": "main.cpp",
        "duration": 120
    },
    {
        "userid": "test5",
        "deviceid": null,
        "starttime": "2019-05-24T19:40:01.13",
        "endtime": "2019-05-24T19:50:01.13",
        "ostype": null,
        "exename": "Outlook.exe",
        "windowtitle": "AW: Cheffe",
        "duration": 120
    },
    {
        "userid": "test5",
        "deviceid": null,
        "starttime": "2019-05-24T19:50:01.13",
        "endtime": "2019-05-24T19:60:01.13",
        "ostype": null,
        "exename": "Notepad++.exe",
        "windowtitle": "main.cpp",
        "duration": 120
    }
];
