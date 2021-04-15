import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import Template from '../components/Template'
import TemplateAfterForm from '../components/TemplateAfterForm'
import PrivacyPolicy from '../components/PrivacyPolicy'
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
    name: 'TemplateAfterForm',
    component: TemplateAfterForm
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

export default router