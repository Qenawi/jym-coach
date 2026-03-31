import { ref } from 'vue'

const stories_data = [
  {
    id: 'story-1',
    name: 'Ahmed M.',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=400&fit=crop',
  },
  {
    id: 'story-2',
    name: 'Omar K.',
    imageUrl: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=500&h=400&fit=crop',
  },
  {
    id: 'story-3',
    name: 'Sara H.',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=400&fit=crop',
  },
  {
    id: 'story-4',
    name: 'Youssef A.',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&h=400&fit=crop',
  },
]

export function useStories() {
  const stories = ref([])

  const fetchStories = () => {
    stories.value = stories_data
  }

  return { stories, fetchStories }
}
