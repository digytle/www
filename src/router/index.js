import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import Featurette from '../components/Featurette'
import DesignPage from '../components/DesignPage'
import PrivacyPolicy from '../components/PrivacyPolicy'
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
  {
    path: '/privacy-policy/**',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
})

export default router