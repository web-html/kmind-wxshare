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
const NotFound = asyncComponent('NotFound')
const Announcement = asyncComponent('Announcement')
const Footprint = asyncComponent('Footprint')
const Journey = asyncComponent('Journey')
const Share = asyncComponent('Share')
const Kmind = asyncComponent('KmindIndex')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    // { path: '/', name: 'share', redirect: '/share' },
    {path: '/', name: 'Kmind',component: Kmind},
    { path: '/share/weiXin', name: 'share', component: Share },
    { path: '*', name: 'NotFound', component: NotFound }
  ]
})

export default router
