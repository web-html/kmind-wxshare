import Vue from 'vue'
import Router from 'vue-router'

/**
 * [异步组件加载函数]
 * @param  {[string]} name [组件名称]
 * @return {[promise]}      [组件]
 */
const asyncComponent = (name) => {
  return resolve => require([`@/view/${name}`], resolve)
}
const Map = asyncComponent('Map')
const Details = asyncComponent('Details')
const NotFound = asyncComponent('NotFound')
const Announcement = asyncComponent('Announcement')
const Footprint = asyncComponent('Footprint')
const Journey = asyncComponent('Journey')
const Share = asyncComponent('Share')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {path: '/', name: 'App', redirect: '/map'},
    {path: '/map', name: 'Map', component: Map},
    {path: '/details', name: 'Details', component: Details},
    {path: '/announcement', name: 'announcement', component: Announcement},
    {path: '/footprint', name: 'footprint', component: Footprint},
    {path: '/poi', name: 'poi', component: Journey},
    {path: '/journey', name: 'journey', component: Journey},
    {path: '/share', name: 'share', component: Share},
    {path: '*', name: 'NotFound', component: NotFound}
  ]
})

export default router
