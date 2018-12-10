import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Project from './views/Project.vue'
import Profile from './views/Profile.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import Store from './store'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/'},
    {
      path: '/',
      name: 'project',
      component: Project,
      // beforeEnter: AuthGuard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

  ],
  // mode:'history'
})

function AuthGuard(from, to, next){
  if(Store.getters.isUserAuthenticated)
  next()
  else
  next('/')
}