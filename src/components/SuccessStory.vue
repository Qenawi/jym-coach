<script setup>
defineProps({
  story: { type: Object, required: true },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <div class="story-card fade-in" :style="{ animationDelay: `${index * 0.1}s` }">
    <div class="story-image">
      <img :src="story.imageUrl" :alt="story.name + ' transformation'" />
    </div>
    <div class="story-name">{{ story.name }}</div>
  </div>
</template>

<style scoped>
.story-card {
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.story-card:hover {
  border-color: var(--color-brand-dark);
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.story-image img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.story-name {
  padding: var(--space-md) var(--space-lg);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  text-align: center;
}
</style>
