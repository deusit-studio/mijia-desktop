import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const language = ref<string | null>(null)
  const isDark = ref<boolean>(false)
  const accent = ref<'blue' | 'green' | 'red'>('blue')

  function setLanguage(lang: string | null) {
    language.value = lang
    localStorage.setItem('settings.language', lang ?? '')
  }
  function load() {
    const l = localStorage.getItem('settings.language')
    language.value = l === '' ? null : (l as string | null)
    const d = localStorage.getItem('settings.isDark')
    isDark.value = d === '1'
    const a = localStorage.getItem('settings.accent')
    if (a === 'green' || a === 'red') accent.value = a as any
  }
  function toggleDark() {
    isDark.value = !isDark.value
    localStorage.setItem('settings.isDark', isDark.value ? '1' : '0')
  }
  function setAccent(a: 'blue' | 'green' | 'red') {
    accent.value = a
    localStorage.setItem('settings.accent', a)
  }

  return { language, isDark, accent, setLanguage, load, toggleDark, setAccent }
})
