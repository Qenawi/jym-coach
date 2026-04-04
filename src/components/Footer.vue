<script setup>
import { onMounted } from 'vue'
import config from '../config/site'
import { useDeveloper } from '../composables/useDeveloper'

const year = new Date().getFullYear()
const { developer, fetchDeveloper } = useDeveloper()

onMounted(() => {
  fetchDeveloper()
})
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <h4>{{ config.brand.name }}</h4>
        <p>{{ config.footer.about }}</p>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <a href="#hero">Home</a>
        <a href="#coach">About</a>
        <a href="#plans">Plans</a>
        <a href="#stories">Results</a>
      </div>
      <div class="footer-contact">
        <h4>Contact</h4>
        <p>{{ config.footer.email }}</p>
        <a :href="'https://wa.me/' + config.whatsapp.number" target="_blank">WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>&copy; {{ year }} {{ config.brand.name }}. {{ config.footer.copyright }}</p>
      <p v-if="developer" class="developed-by">Developed by <a :href="developer.url" target="_blank" class="developer-link">{{ developer.name }}</a></p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: var(--space-3xl) 0 var(--space-lg);
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-2xl);
}

.footer-brand p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.7;
  margin-top: var(--space-sm);
}

.footer-links,
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-links a,
.footer-contact a {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-links a:hover,
.footer-contact a:hover {
  color: var(--color-brand);
}

.footer-contact p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--space-sm);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-lg);
  text-align: center;
}

.footer-bottom p {
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
}

.developed-by {
  margin-top: var(--space-sm);
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
}

.developer-link {
  background: linear-gradient(135deg, var(--color-brand), var(--color-brand-light), #a8e6cf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: opacity var(--transition-fast);
}

.developer-link:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}
</style>
