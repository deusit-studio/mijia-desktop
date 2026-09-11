import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'

let mainWin: BrowserWindow | null = null

function createWindow() {
  mainWin = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, './preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  const devUrl = process.env.VITE_DEV_SERVER_URL
  if (devUrl) {
    mainWin.loadURL(devUrl)
  } else {
    mainWin.loadFile(path.join(__dirname, './dist/renderer/index.html'))
  }

  mainWin.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'F12') {
      mainWin?.webContents.openDevTools({ mode: 'detach' })
    }
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.handle('get-system-locale', () => app.getLocale?.() ?? 'en')
ipcMain.on('open-devtools', () => {
  const w = BrowserWindow.getAllWindows()[0]
  w?.webContents.openDevTools({ mode: 'detach' })
})

// mi-invoke handler: delegate to mi-service
ipcMain.handle('mi-invoke', async (_, method: string, args: any) => {
  console.log('[mi-invoke]', method, args)
  // lazy require mi-service so app can start in dev before built
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mi = require('./src/main/mi-service')
    if (mi && typeof mi.handle === 'function') {
      return await mi.handle(method, args)
    }
  } catch (e) {
    console.error('mi-service handler error', e)
  }
  return { ok: false, method, args }
})
