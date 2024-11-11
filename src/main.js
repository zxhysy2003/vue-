import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import PanelHead from './components/panelHead.vue'

router.beforeEach((to, from) => {
  const token = localStorage.getItem('pz_token')
  if (!token && to.path !== '/login') {
    return '/login'
  } else if (token && to.path === '/login') {
    return '/'
  } else {
    return true
  }
})

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('PanelHead', PanelHead)

// 路由挂载
app.use(router)
// store挂载
app.use(store)
app.mount('#app')
