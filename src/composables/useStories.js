import { ref } from 'vue'
import config from '../config/site'
import { demoStories } from '../config/demo'
import { getCacheItem, setCacheItem } from '../utils/cookieCache'

const KEY = config.siteKey

export function useStories() {
  const stories = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchStories = async () => {
    if (config.demoMode) {
      stories.value = demoStories
      return
    }

    const cached = getCacheItem(`stories_${KEY}`)
    if (cached) {
      stories.value = cached
      return
    }

    loading.value = true
    error.value = null
    try {
      const { db } = await import('../firebase/config')
      const { collection, getDocs } = await import('firebase/firestore')
      const snap = await getDocs(collection(db, 'sites', KEY, 'stories'))
      stories.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      if (stories.value.length) setCacheItem(`stories_${KEY}`, stories.value)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { stories, loading, error, fetchStories }
}
