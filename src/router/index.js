import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Page404 from '../views/Page404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    name: 'Page404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' &&
    !localStorage.getItem('user') &&
    (localStorage.getItem('user') !== 'admin' || localStorage.getItem('user') !== 'editor')) {
    next({ name: 'Login' })
  } else next()
})

export default router
