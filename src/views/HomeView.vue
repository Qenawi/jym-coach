<script setup>
import { onMounted } from 'vue'
import config from '../config/site'
import { usePlans } from '../composables/usePlans'
import { useStories } from '../composables/useStories'
import HeroBanner from '../components/HeroBanner.vue'
import CoachIntro from '../components/CoachIntro.vue'
import PlanGrid from '../components/PlanGrid.vue'
import SuccessGrid from '../components/SuccessGrid.vue'

const { plans, fetchPlans } = usePlans()
const { stories, fetchStories } = useStories()

onMounted(() => {
  fetchPlans()
  fetchStories()
})
</script>

<template>
  <div>
    <HeroBanner />
    <CoachIntro />

    <!-- Plans Section -->
    <section id="plans" class="section">
      <div class="container">
        <div class="section-title">
          <h2>{{ config.plans.sectionTitle }}</h2>
          <p>{{ config.plans.sectionSubtitle }}</p>
        </div>
        <PlanGrid :plans="plans" />
      </div>
    </section>

    <!-- Success Stories Section -->
    <section id="stories" class="section stories-section">
      <div class="container">
        <div class="section-title">
          <h2>{{ config.stories.sectionTitle }}</h2>
          <p>{{ config.stories.sectionSubtitle }}</p>
        </div>
        <SuccessGrid :stories="stories" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.stories-section {
  background-color: var(--color-bg-secondary);
}
</style>
