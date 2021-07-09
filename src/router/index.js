import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import Template from '../components/Template'
import submited from '../components/submited'
import PrivacyPolicy from '../components/PrivacyPolicy'
// Google Analytics
// https://matteo-gabriele.gitbook.io/vue-gtag/
import VueGtag from "vue-gtag";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/featurettes',
    redirect: '/'
  },
  {
    path: '/featurettes/**',
    name: 'Featurette',
    component: Template
  },
  {
    path: '/stories',
    redirect: '/'
  },
  {
    path: '/privacy-policy/**',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/submited',
    name: 'submited',
    component: submited
  }
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

// Auto tracking
// https://matteo-gabriele.gitbook.io/vue-gtag/auto-tracking
Vue.use(VueGtag, {
  config: { id: "G-WXBKHYSJCZ" }
}, router);

export default router