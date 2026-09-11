import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  getSystemLocale: async () => {
    return await ipcRenderer.invoke('get-system-locale')
  },
  openDevtools: () => {
    ipcRenderer.send('open-devtools')
  },
  miInvoke: async (method: string, args?: any) => {
    return await ipcRenderer.invoke('mi-invoke', method, args)
  },
})
