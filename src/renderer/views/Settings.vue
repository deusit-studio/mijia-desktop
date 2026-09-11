<template>
  <div class="p-6">
    <h1 class="text-2xl font-semibold mb-4">{{ t('settings.title') }}</h1>

    <div class="space-y-4">
      <div>
        <label class="block mb-1">Language</label>
        <select v-model="lang" @change="applyLanguage" class="border p-2">
          <option value="">System</option>
          <option value="zh">中文</option>
          <option value="en">English</option>
        </select>
      </div>

      <div>
        <label class="block mb-1">Theme</label>
        <button @click="toggleDark" class="border px-3 py-1 mr-2">Toggle Dark</button>
        <button @click="applyAccent('blue')" class="border px-3 py-1 mr-2">Blue</button>
        <button @click="applyAccent('green')" class="border px-3 py-1 mr-2">Green</button>
        <button @click="applyAccent('red')" class="border px-3 py-1">Red</button>
      </div>

      <div>
        <button @click="openDevTools" class="td-button">Open DevTools (F12)</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/store/settings'
const { t } = useI18n()
const settings = useSettingsStore()
settings.load()

const lang = ref(settings.language ?? '')
watchEffect(() => {
  if (settings.language) lang.value = settings.language
})

function applyLanguage() {
  const v = lang.value || null
  settings.setLanguage(v)
  const locale = v === 'zh' ? 'zh' : v === 'en' ? 'en' : null
  if (locale) {
    // @ts-ignore
    useI18n().global.locale.value = locale
  }
}

function toggleDark() {
  settings.toggleDark()
}
function applyAccent(a) {
  settings.setAccent(a)
}
function openDevTools() {
  // @ts-ignore
  window?.electronAPI?.openDevtools?.()
}
</script>
