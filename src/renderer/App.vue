<template>
  <div :class="rootClasses">
    <div class="flex h-screen">
      <Sidebar />
      <main class="flex-1 bg-white dark:bg-gray-900">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from './store/settings'
import Sidebar from './components/layout/Sidebar.vue'

const settings = useSettingsStore()
const rootClasses = computed(() => {
  return [
    settings.isDark ? 'dark' : '',
    settings.accent ? `accent-${settings.accent}` : 'accent-blue',
  ].join(' ')
})
</script>

<style>
/* root-level, Tailwind takes over most styles */
</style>
