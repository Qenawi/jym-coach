<script setup>
import PlanCard from './PlanCard.vue'

defineProps({
  plans: { type: Array, required: true },
})
</script>

<template>
  <div class="plan-grid">
    <PlanCard v-for="(plan, i) in plans" :key="plan.id" :plan="plan" :index="i" />
  </div>
</template>

<style scoped>
.plan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-xl);
}

@media (max-width: 600px) {
  .plan-grid {
    grid-template-columns: 1fr;
  }
}
</style>
