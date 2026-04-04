import { ref } from 'vue'
import config from '../config/site'
import { demoPlans } from '../config/demo'
import { getCacheItem, setCacheItem } from '../utils/cookieCache'

const KEY = config.siteKey

export function usePlans() {
  const plans = ref([])
  const plan = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchPlans = async () => {
    if (config.demoMode) {
      plans.value = demoPlans
      return
    }

    const cached = getCacheItem(`plans_${KEY}`)
    if (cached) {
      plans.value = cached
      return
    }

    loading.value = true
    error.value = null
    try {
      const { db } = await import('../firebase/config')
      const { collection, getDocs, query, orderBy } = await import('firebase/firestore')
      const q = query(collection(db, 'sites', KEY, 'plans'), orderBy('tier'))
      const snap = await getDocs(q)
      plans.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      if (plans.value.length) setCacheItem(`plans_${KEY}`, plans.value)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const fetchPlanById = async (id) => {
    if (config.demoMode) {
      plan.value = demoPlans.find(p => p.id === id) || null
      return
    }

    const cacheKey = `plan_${KEY}_${id}`
    const cached = getCacheItem(cacheKey)
    if (cached) {
      plan.value = cached
      return
    }

    loading.value = true
    error.value = null
    try {
      const { db } = await import('../firebase/config')
      const { doc, getDoc } = await import('firebase/firestore')
      const snap = await getDoc(doc(db, 'sites', KEY, 'plans', id))
      plan.value = snap.exists() ? { id: snap.id, ...snap.data() } : null
      if (plan.value) setCacheItem(cacheKey, plan.value)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { plans, plan, loading, error, fetchPlans, fetchPlanById }
}
