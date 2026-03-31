<script setup>
import { computed } from 'vue'
import config from '../config/site'

const greeting = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 18) return 'Good Afternoon'
  return 'Good Evening'
})

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-content container">
      <p class="hero-greeting fade-in">{{ greeting }}</p>
      <h1 class="hero-title fade-in">
        {{ config.hero.title }}<br />
        <span class="accent">{{ config.hero.titleAccent }}</span>
      </h1>
      <p class="hero-subtitle fade-in">{{ config.hero.subtitle }}</p>
      <button class="btn btn-primary fade-in" @click="scrollTo('plans')">
        {{ config.hero.cta }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-4xl) 0;
  background:
    radial-gradient(ellipse at 50% 0%, var(--color-brand-glow) 0%, transparent 60%),
    linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
}

.hero-content {
  max-width: 800px;
}

.hero-greeting {
  font-size: var(--font-size-md);
  color: var(--color-brand);
  font-weight: var(--font-weight-medium);
  letter-spacing: 1px;
  margin-bottom: var(--space-sm);
}

.hero-title {
  margin-bottom: var(--space-lg);
}

.accent {
  color: var(--color-brand);
}

.hero-subtitle {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2xl);
  line-height: 1.7;
}

@media (max-width: 600px) {
  .hero-title {
    font-size: var(--font-size-2xl);
  }
  .hero-subtitle {
    font-size: var(--font-size-base);
  }
}
</style>
