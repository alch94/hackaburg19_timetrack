<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <chart></chart>
    <axios></axios>
    <gantt></gantt>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import chart from './components/chart.vue'
import axios from './components/axios.vue'
import gantt from "./components/gantt.vue";

export default {
  name: 'app',
  components: {
    HelloWorld,
    chart,
    axios,
    gantt
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
