import config from '../config/site'
import { getCacheItem, setCacheItem, clearAllCache } from '../utils/cookieCache'

const KEY = config.siteKey
const SNAPSHOT_CACHE_KEY = `snapshot_${KEY}`

/**
 * Checks if the server data has changed since last visit.
 * Compares a lightweight snapshot timestamp from Firebase
 * against the one stored in a cookie. If newer, clears all
 * cached data so composables re-fetch fresh data.
 */
export async function checkFreshness() {
  if (config.demoMode) return

  try {
    const { db } = await import('../firebase/config')
    const { doc, getDoc } = await import('firebase/firestore')
    const snap = await getDoc(doc(db, 'sites', KEY, 'config', 'snapshot'))

    if (!snap.exists()) return

    const serverTs = snap.data().updatedAt?.toMillis?.() || 0
    if (!serverTs) return

    const localTs = getCacheItem(SNAPSHOT_CACHE_KEY)

    if (localTs && localTs >= serverTs) {
      // Cache is still fresh
      return
    }

    // Server is newer — clear all cached data
    clearAllCache()
    // Store the new timestamp (long TTL — 24h, only invalidated by newer server data)
    setCacheItem(SNAPSHOT_CACHE_KEY, serverTs, 24 * 60 * 60 * 1000)
  } catch (err) {
    console.warn('Freshness check failed:', err)
  }
}
