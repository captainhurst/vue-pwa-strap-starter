import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Auth from '@/components/Auth'
import Logout from '@/components/Logout'
import store from '../store/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: '/auth',
      component: Auth,
      name: 'auth',
      children: [
        {
          path: 'login',
          component: Login,
          name: 'login'
        },
        {
          path: '/logout',
          component: Logout,
          name: 'logout',
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // console.log("store state", store.state.login);
    // console.log("isAuthed", store.state.login.isAuthed)
    // console.log("Token", store.state.login.token)
    // console.log("check", !store.state.login.isAuthed)
    if (!store.state.login.isAuthed) {
      next({
        path: '/auth/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
