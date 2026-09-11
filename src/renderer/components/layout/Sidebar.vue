<template>
  <aside class="w-56 bg-white dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col">
    <div class="h-12 flex items-center px-4 text-lg font-semibold">
      MiJia
    </div>
    <nav class="flex-1 px-2 py-3">
      <RouterLink v-for="item in nav" :key="item.to" :to="item.to" class="block">
        <div
          class="flex items-center px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :class="isActive(item.to) ? 'bg-gray-100 dark:bg-gray-800 border-l-4 pl-2' : ''"
        >
          <component :is="item.icon" class="w-5 h-5 mr-3" />
          <span class="select-none">{{ t(item.labelKey) }}</span>
        </div>
      </RouterLink>
    </nav>

    <div class="px-3 py-3 border-t dark:border-gray-800">
      <div class="flex items-center justify-between">
        <div class="text-sm">{{ t('nav.settings') }}</div>
        <RouterLink to="/settings" class="text-xs text-gray-500">▶</RouterLink>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { LayoutDashboard, Usb } from 'tdesign-icons-vue-next'

const { t } = useI18n()
const route = useRoute()

const nav = [
  { to: '/', icon: LayoutDashboard, labelKey: 'nav.dashboard' },
  { to: '/devices', icon: Usb, labelKey: 'nav.devices' },
]

function isActive(to: string) {
  return route.path === to
}
</script>

<style scoped>
/* additional styling to mirror Motrix feel can be added here */
</style>
