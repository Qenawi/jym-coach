import { ref } from 'vue'
import config from '../config/site'

export function usePlans() {
  const plans = ref([])
  const plan = ref(null)

  const fetchPlans = () => {
    plans.value = config.plans.items
  }

  const fetchPlanById = (id) => {
    plan.value = config.plans.items.find(p => p.id === id) || null
  }

  return { plans, plan, fetchPlans, fetchPlanById }
}
