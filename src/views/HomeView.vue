<script setup>
import { onMounted } from 'vue'
import config from '../config/site'
import { usePlans } from '../composables/usePlans'
import { useStories } from '../composables/useStories'
import { useCoach } from '../composables/useCoach'
import HeroBanner from '../components/HeroBanner.vue'
import CoachIntro from '../components/CoachIntro.vue'
import PlanGrid from '../components/PlanGrid.vue'
import SuccessGrid from '../components/SuccessGrid.vue'

const { plans, loading: plansLoading, error: plansError, fetchPlans } = usePlans()
const { stories, loading: storiesLoading, error: storiesError, fetchStories } = useStories()
const { coach, loading: coachLoading, error: coachError, fetchCoach } = useCoach()

onMounted(() => {
  fetchCoach()
  fetchPlans()
  fetchStories()
})
</script>

<template>
  <div>
    <HeroBanner />

    <!-- Coach Section -->
    <div v-if="coachLoading" class="loading">Loading...</div>
    <div v-else-if="coachError" class="error">{{ coachError }}</div>
    <CoachIntro v-else-if="coach" :coach="coach" />

    <!-- Plans Section -->
    <section id="plans" class="section">
      <div class="container">
        <div class="section-title">
          <h2>{{ config.plans.sectionTitle }}</h2>
          <p>{{ config.plans.sectionSubtitle }}</p>
        </div>
        <div v-if="plansLoading" class="loading">Loading plans...</div>
        <div v-else-if="plansError" class="error">{{ plansError }}</div>
        <PlanGrid v-else :plans="plans" />
      </div>
    </section>

    <!-- Success Stories Section -->
    <section id="stories" class="section stories-section">
      <div class="container">
        <div class="section-title">
          <h2>{{ config.stories.sectionTitle }}</h2>
          <p>{{ config.stories.sectionSubtitle }}</p>
        </div>
        <div v-if="storiesLoading" class="loading">Loading stories...</div>
        <div v-else-if="storiesError" class="error">{{ storiesError }}</div>
        <SuccessGrid v-else :stories="stories" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.stories-section {
  background-color: var(--color-bg-secondary);
}
</style>
