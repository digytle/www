import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import Featurette from '../components/Featurette'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/featurette',
    name: 'Featurette',
    component: Featurette
  }
]

const router = new VueRouter({
  routes
})

export default router
