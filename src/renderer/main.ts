import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import en from './locales/en.json'
import zh from './locales/zh.json'
import './styles/globals.css'
import 'tdesign-vue-next/es/style/index.css'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, zh },
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

;(async () => {
  try {
    // @ts-ignore
    const sys: string | undefined = await window?.electronAPI?.getSystemLocale?.()
    if (sys) {
      const lang = sys.startsWith('zh') ? 'zh' : 'en'
      i18n.global.locale.value = lang
    }
  } catch (e) {
    // ignore
  }
})()
