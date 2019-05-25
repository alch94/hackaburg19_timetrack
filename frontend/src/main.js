import Vue from 'vue';
import App from './App.vue';
// import AppExample from './AppExample.vue';
import Gantt from './components/appsgantt.vue';
import gantttest from './components/gantt.vue';
import Info from './components/Info.vue';
import appstable from './components/appstable';
import durationbarchart from './components/durationbarchart';

import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/demo',
      component: Gantt
    },
    {
      path: '/info',
      component: Info
    },
    {
      path: '/table',
      component: appstable
    },
    {
      path: '/g',
      component: gantttest
    },
    {
      path: '/durationbarchart',
      component: durationbarchart
    }
  ]
});


import './styles/quasar.styl'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'

// import './styles/quasar.styl';
// import iconSet from 'quasar/icon-set/mdi-v3.js';
// import '@quasar/extras/roboto-font/roboto-font.css';
// import '@quasar/extras/mdi-v3/mdi-v3.css';

import './styles/quasar.styl'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {},
  // components: {
  //   QLayout,
  //   QHeader,
  //   QDrawer,
  //   QPageContainer,
  //   QPage,
  //   QToolbar,
  //   QToolbarTitle,
  //   QBtn,
  //   QIcon,
  //   QList,
  //   QItem,
  //   QItemSection,
  //   QItemLabel
  // },
  directives: {},
  plugins: {},
});

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');