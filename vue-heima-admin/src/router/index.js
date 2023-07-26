import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComp from '../components/LoginComp.vue'
import HomeComp from '../components/HomeComp.vue'
import WelcomeComp from '../components/WelcomeComp.vue'

Vue.use(VueRouter)

const routes = [
  // 自动跳转到 login
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'LoginComp', component: LoginComp },
  {
    path: '/home',
    name: 'HomeComp',
    component: HomeComp,
    redirect: '/welcome',
    // 子路由
    children: [{ path: '/welcome', name: 'WelcomeComp', component: WelcomeComp }]
  }
]

const router = new VueRouter({
  routes
})

// 添加路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  // 没有登录
  if (!token) return next('/login')
  // 有登录，直接放行
  next()
})

export default router
