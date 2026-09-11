<template>
  <div class="p-6">
    <h1 class="text-2xl font-semibold mb-4">{{ t('dashboard.title') }}</h1>
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">Widget A</div>
      <div class="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">Widget B</div>
      <div class="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">Widget C</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
