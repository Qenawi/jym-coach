<script setup>
import { useSettings } from '../composables/useSettings'

const { settings } = useSettings()

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-inner container">
      <a class="logo" href="#" @click.prevent="scrollTo('hero')">
        <span class="logo-name">{{ settings.brandName }}</span>
        <span class="logo-tag">{{ settings.brandTagline }}</span>
      </a>
      <nav class="nav-links">
        <a href="#coach" @click.prevent="scrollTo('coach')">About</a>
        <a href="#plans" @click.prevent="scrollTo('plans')">Plans</a>
        <a href="#stories" @click.prevent="scrollTo('stories')">Results</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  text-decoration: none;
}

.logo-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.logo-tag {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-light);
  color: var(--color-brand);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: var(--space-xl);
}

.nav-links a {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--color-brand);
}

@media (max-width: 600px) {
  .nav-links {
    gap: var(--space-md);
  }
  .nav-links a {
    font-size: var(--font-size-xs);
  }
}
</style>
