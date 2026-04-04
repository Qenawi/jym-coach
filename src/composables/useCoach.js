import { ref } from 'vue'
import config from '../config/site'
import { demoCoach } from '../config/demo'
import { getCacheItem, setCacheItem } from '../utils/cookieCache'

const KEY = config.siteKey
const CACHE_KEY = `coach_${KEY}`

export function useCoach() {
  const coach = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchCoach = async () => {
    if (config.demoMode) {
      coach.value = demoCoach
      return
    }

    const cached = getCacheItem(CACHE_KEY)
    if (cached) {
      coach.value = cached
      return
    }

    loading.value = true
    error.value = null
    try {
      const { db } = await import('../firebase/config')
      const { doc, getDoc } = await import('firebase/firestore')
      const snap = await getDoc(doc(db, 'sites', KEY, 'config', 'coach'))
      coach.value = snap.exists() ? snap.data() : null
      if (coach.value) setCacheItem(CACHE_KEY, coach.value)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { coach, loading, error, fetchCoach }
}
