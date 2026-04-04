<script setup>
import { ref } from 'vue'

defineProps({
  story: { type: Object, required: true },
  index: { type: Number, default: 0 },
})

const expanded = ref(false)
</script>

<template>
  <div class="story-card fade-in" :style="{ animationDelay: `${index * 0.1}s` }" @click="expanded = true">
    <div class="story-image">
      <img :src="story.imageUrl" :alt="story.name + ' transformation'" />
      <div class="story-overlay">
        <span class="story-name">{{ story.name }}</span>
      </div>
    </div>
  </div>

  <!-- Expanded lightbox -->
  <Teleport to="body">
    <div v-if="expanded" class="lightbox" @click.self="expanded = false">
      <button class="lightbox-close" @click="expanded = false">&times;</button>
      <div class="lightbox-content">
        <img :src="story.imageUrl" :alt="story.name + ' transformation'" />
        <div class="lightbox-overlay">
          <span class="lightbox-name">{{ story.name }}</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.story-card {
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  cursor: pointer;
}

.story-card:hover {
  border-color: var(--color-brand-dark);
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.story-image {
  position: relative;
}

.story-image img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
}

.story-overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: var(--space-lg) var(--space-lg) var(--space-md);
  background: linear-gradient(to top, var(--color-brand-dark), transparent);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.story-name {
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}

/* ─── Lightbox ─── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl);
  animation: fadeIn 0.2s ease;
}

.lightbox-close {
  position: absolute;
  top: 16px;
  right: 24px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
  z-index: 1;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.lightbox-content img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  display: block;
}

.lightbox-overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: var(--space-xl) var(--space-xl) var(--space-lg);
  background: linear-gradient(to top, var(--color-brand-dark), transparent);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.lightbox-name {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  color: #fff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
