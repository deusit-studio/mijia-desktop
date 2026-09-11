import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Devices from '@/views/Devices.vue'
import Settings from '@/views/Settings.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/devices', component: Devices },
  { path: '/settings', component: Settings },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
