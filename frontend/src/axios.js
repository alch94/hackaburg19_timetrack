import axios from 'axios';

export const API_JOKES = axios.create({
    baseURL: `http://api.icndb.com/jokes/random/10`
})

export const API = axios.create({
    baseURL: `http://localhost:8081/`
})

const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

export const getGroupedBy = async function(key) {
    var response = await API.get('activities');
    var newArr = groupBy(response.data, key);
    // console.log(this.chartData["datasets"][0]["data"]);
    return newArr;
    // for (var prop in newArr) {
    //     if (newArr[prop] != null) {
    //         var newDur = newArr[prop].reduce((rv, x) => {
    //             return rv + x.duration;
    //         }, 0);
    //         this.series[0]["data"].push(newDur);
    //         this.chartOptions["xaxis"]["categories"].push(prop);
    //     }
    // }
}