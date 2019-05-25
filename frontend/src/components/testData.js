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

export const TESTDATA = test;
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
