import { ref } from 'vue'
import config from '../config/site'
import { getCacheItem, setCacheItem } from '../utils/cookieCache'

const CACHE_KEY = 'developer'

export function useDeveloper() {
  const developer = ref(null)
  const loading = ref(false)

  const fetchDeveloper = async () => {
    if (config.demoMode) {
      developer.value = { name: 'Ahmed Qenawi', url: 'https://example.com' }
      return
    }

    const cached = getCacheItem(CACHE_KEY)
    if (cached) {
      developer.value = cached
      return
    }

    loading.value = true
    try {
      const { db } = await import('../firebase/config')
      const { doc, getDoc } = await import('firebase/firestore')
      const snap = await getDoc(doc(db, 'config', 'developer'))
      developer.value = snap.exists() ? snap.data() : null
      if (developer.value) setCacheItem(CACHE_KEY, developer.value)
    } catch (err) {
      console.warn('Developer fetch failed:', err)
    } finally {
      loading.value = false
    }
  }

  return { developer, loading, fetchDeveloper }
}
