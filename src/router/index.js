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
    path: '/buchrezension5',
    name: 'Buchrezension5',
    component: () => import(/*webpackChunkName: "buchrezension5" */ '../views/Buchrezension5Page.vue')
  },
  {
    path: '/buchrezensionPageUnderline',
    name: 'BuchrezensionPageUnderline',
    component: () => import(/*webpackChunkName: "buchrezensionUnderline" */ '../views/BuchrezensionPageUnderline.vue')
  },
  {
    path: '/buchrezensionPage2Underline',
    name: 'BuchrezensionPage2Underline',
    component: () => import(/*webpackChunkName: "buchrezension2Underline" */ '../views/BuchrezensionPage2Underline.vue')
  },
  {
    path: '/buchrezensionPage3Underline',
    name: 'BuchrezensionPage3Underline',
    component: () => import(/*webpackChunkName: "buchrezension3Underline" */ '../views/BuchrezensionPage3Underline.vue')
  },
  {
    path: '/buchrezensionPage4Underline',
    name: 'BuchrezensionPage4Underline',
    component: () => import(/*webpackChunkName: "buchrezension4Underline" */ '../views/BuchrezensionPage4Underline.vue')
  },
  {
    path: '/buchrezensionPage5Underline',
    name: 'BuchrezensionPage5Underline',
    component: () => import(/*webpackChunkName: "buchrezension5Underline" */ '../views/BuchrezensionPage5Underline.vue')
  },

  {
    path: '/buchrezensionPageRaw',
    name: 'BuchrezensionPageRaw',
    component: () => import(/*webpackChunkName: "buchrezensionRaw" */ '../views/BuchrezensionPageRaw.vue')
  },
  {
    path: '/buchrezensionPage2Raw',
    name: 'BuchrezensionPage2Raw',
    component: () => import(/*webpackChunkName: "buchrezension2Raw" */ '../views/BuchrezensionPage2Raw.vue')
  },
  {
    path: '/buchrezensionPage3Raw',
    name: 'BuchrezensionPage3Raw',
    component: () => import(/*webpackChunkName: "buchrezension3Raw" */ '../views/BuchrezensionPage3Raw.vue')
  },
  {
    path: '/buchrezensionPage4Raw',
    name: 'BuchrezensionPage4Raw',
    component: () => import(/*webpackChunkName: "buchrezension4Raw" */ '../views/BuchrezensionPage4Raw.vue')
  },
  {
    path: '/buchrezensionPage5Raw',
    name: 'BuchrezensionPage5Raw',
    component: () => import(/*webpackChunkName: "buchrezension5Underline" */ '../views/BuchrezensionPage5Raw.vue')
  },



  {
    path: '/fragenpage',
    name: 'Fragenpage',
    component: () => import(/*webpackChunkName: "fragenpage" */ '../views/FragenPage.vue')
  },
  {
    path: '/fragen2page',
    name: 'Fragen2page',
    component: () => import(/*webpackChunkName: "fragen2page" */ '../views/Fragen2Page.vue')
  },
  {
    path: '/endpage',
    name: 'Endpage',
    component: () => import(/*webpackChunkName: "endpage" */ '../views/EndPage.vue')
  },
  {
    path: '/simulation',
    name: 'Simulation',
    component: () => import(/*webpackChunkName: "endpage" */ '../views/Simulation.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router