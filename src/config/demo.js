export const demoCoach = {
  name: 'Coach Name',
  bio: 'Helping you build strength and sustainable results',
  photoUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=600&fit=crop',
  certificates: [
    'Certified Fitness Trainer',
    'ISSA & Gold\'s Academy Certified',
    'Strength & Conditioning Specialist',
  ],
}

export const demoPlans = [
  {
    id: 'plan-1',
    tier: 1,
    name: '1 Star',
    price: 500,
    duration_months: 1,
    follow_up: { type: 'monthly', count: 1 },
    diet_vitamin_plan: { frequency: '2 per month', total: 2 },
    workout_plan: { total: 1 },
  },
  {
    id: 'plan-2',
    tier: 2,
    name: '2 Stars',
    price: 900,
    duration_months: 2,
    follow_up: { type: 'monthly', count: 2 },
    diet_vitamin_plan: { frequency: '2 per month', total: 4 },
    workout_plan: { total: 2 },
  },
  {
    id: 'plan-3',
    tier: 3,
    name: '3 Stars',
    price: 1200,
    duration_months: 3,
    follow_up: { type: 'monthly', count: 3 },
    diet_vitamin_plan: { frequency: 'every 10 days', total: 9 },
    workout_plan: { total: 3 },
  },
  {
    id: 'plan-4',
    tier: 4,
    name: '4 Stars',
    price: 2000,
    duration_months: 6,
    follow_up: { type: 'monthly', count: 6 },
    diet_vitamin_plan: { frequency: 'every 10 days', total: 18 },
    workout_plan: { total: 6 },
  },
  {
    id: 'plan-5',
    tier: 5,
    name: '5 Stars',
    price: 3500,
    duration_months: 12,
    follow_up: { type: 'monthly', count: 12 },
    diet_vitamin_plan: { frequency: 'every 10 days', total: 36 },
    workout_plan: { total: 12 },
  },
]

export const demoStories = [
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
