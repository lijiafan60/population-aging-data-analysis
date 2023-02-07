import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/home/index.vue'
import Pension from '@/views/pension/index.vue'
import Service from "@/views/service/index.vue";
import Policy from "@/views/policy/index.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/pension',
    name: 'pension',
    component: Pension
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/policy',
    name: 'policy',
    component: Policy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
