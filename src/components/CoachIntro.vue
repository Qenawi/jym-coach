<script setup>
import config from '../config/site'
</script>

<template>
  <section id="coach" class="section coach">
    <div class="container">
      <div class="section-title">
        <h2>{{ config.coach.sectionTitle }}</h2>
      </div>

      <div class="coach-card">
        <!-- Photo -->
        <div class="coach-photo">
          <img :src="config.coach.photoUrl" :alt="config.coach.name" />
          <div class="photo-border"></div>
        </div>

        <!-- Info -->
        <div class="coach-info">
          <h3 class="coach-name">{{ config.coach.name }}</h3>
          <p class="coach-bio">{{ config.coach.bio }}</p>

          <div class="divider"></div>

          <div class="certificates">
            <h4>Credentials</h4>
            <div class="cert-list">
              <div v-for="cert in config.coach.certificates" :key="cert" class="cert-item">
                <span class="cert-icon">✦</span>
                <span>{{ cert }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.coach {
  background-color: var(--color-bg-secondary);
}

.coach-card {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--space-3xl);
  align-items: center;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl);
}

/* Photo */
.coach-photo {
  position: relative;
}

.coach-photo img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: var(--radius-lg);
  position: relative;
  z-index: 1;
}

.photo-border {
  position: absolute;
  inset: 8px -8px -8px 8px;
  border: 2px solid var(--color-brand);
  border-radius: var(--radius-lg);
  z-index: 0;
}

/* Info */
.coach-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.coach-name {
  font-size: var(--font-size-2xl);
  color: var(--color-text-primary);
}

.coach-bio {
  color: var(--color-text-secondary);
  font-size: var(--font-size-md);
  line-height: 1.8;
}

.divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, var(--color-brand), transparent);
  margin: var(--space-sm) 0;
}

/* Certificates */
.certificates h4 {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--space-sm);
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.cert-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-bg-input);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
}

.cert-icon {
  color: var(--color-brand);
  font-size: var(--font-size-xs);
}

/* Mobile */
@media (max-width: 768px) {
  .coach-card {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    padding: var(--space-lg);
  }

  .coach-photo {
    max-width: 260px;
    margin: 0 auto;
  }

  .coach-info {
    text-align: center;
    align-items: center;
  }
}
</style>
