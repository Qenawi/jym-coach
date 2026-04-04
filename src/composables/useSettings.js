import { reactive } from 'vue'
import config from '../config/site'
import { getCacheItem, setCacheItem } from '../utils/cookieCache'

const KEY = config.siteKey
const CACHE_KEY = `settings_${KEY}`

// Shared reactive state — fetched once, used everywhere
const settings = reactive({
  brandName: config.brand.name,
  brandTagline: config.brand.tagline,
  whatsappNumber: config.whatsapp.number,
  currency: config.currency,
  accentColor: '#2ecc71',
  accentColorLight: '#3ddb80',
  accentColorDark: '#25a35a',
  loaded: false,
})

let fetchPromise = null

async function loadSettings() {
  if (settings.loaded) return
  if (fetchPromise) return fetchPromise

  fetchPromise = (async () => {
    if (config.demoMode) {
      settings.loaded = true
      return
    }

    const cached = getCacheItem(CACHE_KEY)
    if (cached) {
      Object.assign(settings, cached, { loaded: true })
      applyAccentColors()
      return
    }

    try {
      const { db } = await import('../firebase/config')
      const { doc, getDoc } = await import('firebase/firestore')
      const snap = await getDoc(doc(db, 'sites', KEY, 'config', 'settings'))
      if (snap.exists()) {
        const data = snap.data()
        Object.assign(settings, data, { loaded: true })
        setCacheItem(CACHE_KEY, data)
        applyAccentColors()
      } else {
        settings.loaded = true
      }
    } catch (err) {
      console.warn('Settings fetch failed:', err)
      settings.loaded = true
    }
  })()

  return fetchPromise
}

function applyAccentColors() {
  const root = document.documentElement
  if (settings.accentColor) root.style.setProperty('--color-accent', settings.accentColor)
  if (settings.accentColorLight) root.style.setProperty('--color-accent-light', settings.accentColorLight)
  if (settings.accentColorDark) root.style.setProperty('--color-accent-dark', settings.accentColorDark)
}

export function useSettings() {
  return { settings, loadSettings }
}
