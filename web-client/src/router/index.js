import Vue from 'vue'
import Router from 'vue-router'
import tempChart from '@/components/TempChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tempChart',
      component: tempChart
    },
  ] 
})
