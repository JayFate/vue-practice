import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComp from '../components/LoginComp.vue'

Vue.use(VueRouter)

const routes = [
  // 自动跳转到 login
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'LoginComp', component: LoginComp }
]

const router = new VueRouter({
  routes
})

export default router
