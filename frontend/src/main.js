import Vue from 'vue';
import VueWorker from 'vue-worker';
import App from './App.vue';
// import AppExample from './AppExample.vue';
import Gantt from './components/appsgantt.vue';
import Info from './components/Info.vue';
import appstable from './components/appstable';

import Router from 'vue-router';
Vue.use(Router);
Vue.use(VueWorker);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Gantt
    },
    {
      path: '/Info',
      component: Info
    },
    {
      path: '/table',
      component: appstable
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

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');