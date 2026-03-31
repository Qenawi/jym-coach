<script setup>
import config from '../config/site'
import { useTracking } from '../composables/useTracking'

const props = defineProps({
  plan: { type: Object, required: true },
  index: { type: Number, default: 0 },
})

const { trackOrder } = useTracking()

const orderViaWhatsApp = () => {
  trackOrder(props.plan.name, props.plan.duration_months)

  const message = config.whatsapp.messageTemplate
    .replace('{planName}', props.plan.name)
    .replace('{duration}', props.plan.duration_months)

  window.open(`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(message)}`, '_blank')
}
</script>

<template>
  <div class="plan-card fade-in" :class="{ 'plan-popular': plan.tier === 3 }" :style="{ animationDelay: `${index * 0.1}s` }">
    <div v-if="plan.tier === 3" class="popular-badge">Most Popular</div>

    <!-- Stars -->
    <div class="plan-stars">
      <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= plan.tier }">★</span>
    </div>

    <!-- Name & Duration -->
    <h3 class="plan-name">{{ plan.name }}</h3>
    <div class="plan-duration">
      <span class="duration-number">{{ plan.duration_months }}</span>
      <span class="duration-label">{{ plan.duration_months === 1 ? 'Month' : 'Months' }}</span>
    </div>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- Features -->
    <ul class="plan-features">
      <li>
        <span class="feature-value">{{ plan.follow_up.count }}x</span>
        <div class="feature-text">
          <span class="feature-label">Monthly Follow-ups</span>
        </div>
      </li>
      <li>
        <span class="feature-value">{{ plan.diet_vitamin_plan.total }}</span>
        <div class="feature-text">
          <span class="feature-label">Diet & Vitamin Plans</span>
          <span class="feature-sub">{{ plan.diet_vitamin_plan.frequency }}</span>
        </div>
      </li>
      <li>
        <span class="feature-value">{{ plan.workout_plan.total }}</span>
        <div class="feature-text">
          <span class="feature-label">Workout Plans</span>
        </div>
      </li>
    </ul>

    <button class="btn btn-primary plan-cta" @click="orderViaWhatsApp">
      Get Started
    </button>
  </div>
</template>

<style scoped>
.plan-card {
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl) var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition: all var(--transition-normal);
}

.plan-card:hover {
  border-color: var(--color-brand-dark);
  box-shadow: var(--shadow-hover);
  transform: translateY(-6px);
}

.plan-popular {
  border-color: var(--color-brand);
  box-shadow: 0 0 24px rgba(46, 204, 113, 0.1);
}

.popular-badge {
  position: absolute;
  top: -12px;
  background: var(--color-brand);
  color: var(--color-text-inverse);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
}

/* Stars */
.plan-stars {
  display: flex;
  gap: 4px;
  margin-bottom: var(--space-md);
}

.star {
  font-size: var(--font-size-lg);
  color: var(--color-border-light);
  transition: color var(--transition-fast);
}

.star.filled {
  color: var(--color-brand);
  text-shadow: 0 0 8px rgba(46, 204, 113, 0.4);
}

/* Name & Duration */
.plan-name {
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
}

.plan-duration {
  display: flex;
  align-items: baseline;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}

.duration-number {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-brand);
  line-height: 1;
}

.duration-label {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

/* Divider */
.divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-brand), transparent);
  margin-bottom: var(--space-lg);
}

/* Features */
.plan-features {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  flex: 1;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-bg-input);
  border-radius: var(--radius-md);
}

.feature-value {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-brand);
  min-width: 36px;
}

.feature-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.feature-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
}

.feature-sub {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

/* CTA */
.plan-cta {
  width: 100%;
}
</style>
