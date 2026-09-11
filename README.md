# MiJia Desktop Starter

Stack: Vue3 + Vite + Electron + Tailwind + Pinia + vue-i18n + TDesign

Quick start:
1. Install deps: `pnpm install` (or `npm install`)
2. Dev: `pnpm run dev` (will start Vite and Electron; F12 opens devtools)
3. Build renderer: `pnpm run build:renderer`
4. Build full app: configure electron-builder and run `pnpm run build`

Notes:
- Implement MiService in `src/main/mi-service.ts` and the handler in `electron.main.ts` (ipc 'mi-invoke')
- UI: use TDesign components + Tailwind utility classes to match Motrix look.
- Translations live in `src/renderer/locales/*.json`. Add keys as needed.
