<template>
  <div class="p-6">
    <h1 class="text-2xl font-semibold mb-4">{{ t('devices.title') }}</h1>
    <div>设备列表（示例）</div>
    <button @click="fetchDevices" class="mt-4 td-button">调用 miInvoke</button>
    <pre class="mt-2">{{ result }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const result = ref('')

async function fetchDevices() {
  // @ts-ignore
  const r = await window?.electronAPI?.miInvoke?.('getDevices', {})
  result.value = JSON.stringify(r, null, 2)
}
</script>
