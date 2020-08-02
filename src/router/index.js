import Vue from 'vue'
import VueRouter from 'vue-router'
//import BegruessungPage from '../views/BegruessungPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import(/*webpackChunkName: "begruessung_home" */ '../views/BegruessungPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/begruessung',
    name: 'Begruessung',
    component: () => import(/*webpackChunkName: "begruessung" */ '../views/BegruessungPage.vue')
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: () => import(/*webpackChunkName: "datenschutz" */ '../views/DatenschutzPage.vue')
  },
  {
    path: '/hintergrund',
    name: 'Hintergrund',
    component: () => import(/*webpackChunkName: "hintergrund" */ '../views/HintergrundPage.vue')
  },
  {
    path: '/buch',
    name: 'Buch',
    component: () => import(/*webpackChunkName: "buch" */ '../views/BuchPage.vue')
  },
  {
    path: '/buchrezension',
    name: 'Buchrezension',
    component: () => import(/*webpackChunkName: "buchrezension" */ '../views/BuchrezensionPage.vue')
  },
  {
    path: '/buchrezension2',
    name: 'Buchrezension2',
    component: () => import(/*webpackChunkName: "buchrezension2" */ '../views/Buchrezension2Page.vue')
  },
  {
    path: '/buchrezension3',
    name: 'Buchrezension3',
    component: () => import(/*webpackChunkName: "buchrezension3" */ '../views/Buchrezension3Page.vue')
  },
  {
    path: '/buchrezension4',
    name: 'Buchrezension4',
    component: () => import(/*webpackChunkName: "buchrezension4" */ '../views/Buchrezension4Page.vue')
  },
  {
    path: '/fragenpage',
    name: 'Fragenpage',
    component: () => import(/*webpackChunkName: "fragenpage" */ '../views/FragenPage.vue')
  },
  {
    path: '/endpage',
    name: 'Endpage',
    component: () => import(/*webpackChunkName: "endpage" */ '../views/EndPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
