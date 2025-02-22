import Vue from 'vue'
import Router from 'vue-router'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

Vue.use(Router)

let router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        guest: true,
      },
      // route level code-splitting
      // this generates a separate chunk (home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        guest: true,
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      meta: {
        guest: true,
      },
      // route level code-splitting
      // this generates a separate chunk (contact-us.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact-us" */ '../views/ContactView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        auth: true,
      },
      // route level code-splitting
      // this generates a separate chunk (profile.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        guest: true,
      },
      // route level code-splitting
      // this generates a separate chunk (register.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        guest: true,
      },
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        auth: true
      },
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/AdminView.vue')
    },
    {
      path: '/TestingAuth',
      name: 'testingauth',

      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/TestingAuth.vue')
    },
    {
      path: '/TestingAPI',
      name: 'testingapi',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/TestingAPI.vue')
    },
  ]
})


router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(userAuth => {
    if (userAuth) {
      firebase.auth().currentUser.getIdTokenResult()
        .then(function ({
          claims
        }) {
          if (claims.client) {
            if (to.path === '/admin')
              return next({
                path: '/profile',
              })
          }
          else if (claims.admin) {
            if (to.path === '/admin')
              return next({
                path: '/admin',
              })
          }
          else{
            return next()
          }
        })
    } else {
      if (to.matched.some(record => record.meta.auth)) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    }

  })
  next()
})

export default router