import fs from 'fs'
import path from 'path'

const os = require('os')
const homedir = os.homedir()
const dataDir = path.join(homedir, '.mijia')
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

const TOKEN_FILE = path.join(dataDir, 'token.json')

export async function handle(method: string, args: any) {
  switch (method) {
    case 'getToken':
      return getToken()
    case 'setToken':
      return setToken(args?.token)
    case 'getDevices':
      return getDevices()
    case 'refreshDevices':
      return refreshDevices()
    default:
      return { ok: false, error: 'unknown_method' }
  }
}

function getToken() {
  try {
    if (fs.existsSync(TOKEN_FILE)) {
      const txt = fs.readFileSync(TOKEN_FILE, 'utf8')
      const data = JSON.parse(txt)
      return { ok: true, token: data.token }
    }
  } catch (e) {
    console.error('getToken error', e)
  }
  return { ok: false }
}

function setToken(token: string) {
  try {
    fs.writeFileSync(TOKEN_FILE, JSON.stringify({ token }), 'utf8')
    return { ok: true }
  } catch (e) {
    console.error('setToken error', e)
    return { ok: false }
  }
}

async function getDevices() {
  // Placeholder: if token present, call real API via Do1e-based implementation
  const t = getToken()
  if (!t.ok) return { ok: false, error: 'no_token' }
  // TODO: integrate with Do1e/mijia-api package or custom implementation
  // For now return mock
  return {
    ok: true,
    devices: [
      { id: 'dev1', name: 'Smart Lamp', model: 'lamp.v1' },
      { id: 'dev2', name: 'Air Purifier', model: 'air.v2' },
    ],
  }
}

async function refreshDevices() {
  // placeholder to refresh cache or fetch
  return getDevices()
}
