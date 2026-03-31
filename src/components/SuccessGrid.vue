<script setup>
import SuccessStory from './SuccessStory.vue'

defineProps({
  stories: { type: Array, required: true },
})
</script>

<template>
  <div class="stories-grid">
    <SuccessStory v-for="(story, i) in stories" :key="story.id" :story="story" :index="i" />
  </div>
</template>

<style scoped>
.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-xl);
}

@media (max-width: 600px) {
  .stories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }
}
</style>
