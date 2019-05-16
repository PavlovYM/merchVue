import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import scheme from './views/scheme.vue'
import size from './views/size.vue'
import revievs from './views/revievs.vue'
import question from './views/question.vue'
import product from './views/product.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/scheme',
      name: 'scheme',
      component: () => import('./views/scheme.vue')
    },
    {
      path: '/size',
      name: 'size',
      component: () => import('./views/size.vue')
    },
    {
      path: '/revievs',
      name: 'revievs',
      component: () => import('./views/revievs.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('./views/question.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('./views/product.vue')
    }
  ]
})