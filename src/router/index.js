import Vue from 'vue'
import Router from 'vue-router'
import guitars from '@/components/guitars'
import customizer from '@/components/customizer'
import about from '@/components/about'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/guitars',
      name: 'Guitars',
      component: guitars
    },
    {
      path: '/customizer',
      name: 'Customizer',
      component: customizer
    },
    {
      path: '/about',
      name: 'About',
      component: about
    }
  ]
})
