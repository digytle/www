import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import Featurette from '../components/Featurette'
import DesignPage from '../components/DesignPage'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/featurette/**',
    name: 'Featurette',
    component: Featurette
  }, {
    path: '/design/**',
    name: 'DesignPage',
    component: DesignPage
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router