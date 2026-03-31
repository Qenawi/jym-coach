const config = {
  brand: {
    name: 'Your Coach',
    tagline: 'Fitness & Coaching',
  },

  hero: {
    title: 'Transform Your Body,',
    titleAccent: 'Transform Your Life',
    subtitle: 'Professional fitness coaching tailored to your goals. Start your journey today.',
    cta: 'View Plans',
  },

  coach: {
    sectionTitle: 'Meet Your Coach',
    sectionSubtitle: 'Helping you build strength and sustainable results',
    name: 'Coach Mahmoud',
    bio: 'Helping you build strength and sustainable results',
    photoUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=600&fit=crop',
    certificates: [
      'Certified Fitness Trainer',
      'ISSA & Gold\'s Academy Certified',
      'Strength & Conditioning Specialist',
    ],
  },

  plans: {
    sectionTitle: 'Training Plans',
    sectionSubtitle: 'Choose the plan that fits your goals',
    items: [
      {
        id: 'plan-1',
        tier: 1,
        name: '1 Star',
        duration_months: 1,
        follow_up: { type: 'monthly', count: 1 },
        diet_vitamin_plan: { frequency: '2 per month', total: 2 },
        workout_plan: { total: 1 },
      },
      {
        id: 'plan-2',
        tier: 2,
        name: '2 Stars',
        duration_months: 2,
        follow_up: { type: 'monthly', count: 2 },
        diet_vitamin_plan: { frequency: '2 per month', total: 4 },
        workout_plan: { total: 2 },
      },
      {
        id: 'plan-3',
        tier: 3,
        name: '3 Stars',
        duration_months: 3,
        follow_up: { type: 'monthly', count: 3 },
        diet_vitamin_plan: { frequency: 'every 10 days', total: 9 },
        workout_plan: { total: 3 },
      },
      {
        id: 'plan-4',
        tier: 4,
        name: '4 Stars',
        duration_months: 6,
        follow_up: { type: 'monthly', count: 6 },
        diet_vitamin_plan: { frequency: 'every 10 days', total: 18 },
        workout_plan: { total: 6 },
      },
      {
        id: 'plan-5',
        tier: 5,
        name: '5 Stars',
        duration_months: 12,
        follow_up: { type: 'monthly', count: 12 },
        diet_vitamin_plan: { frequency: 'every 10 days', total: 36 },
        workout_plan: { total: 12 },
      },
    ],
  },

  stories: {
    sectionTitle: 'Success Stories',
    sectionSubtitle: 'Real results from real people',
  },

  whatsapp: {
    number: '201234567890',
    messageTemplate: "Hi, I'm interested in the *{planName}* plan ({duration} months). I'd like to get started!",
  },

  footer: {
    about: 'Professional fitness coaching to help you reach your goals with personalized plans and expert guidance.',
    email: 'coach@example.com',
    copyright: 'All rights reserved.',
  },

  tracking: {
    storeName: 'jym',
    collection: 'coach',
    subCollection: 'actions',
  },

  developer: {
    name: 'Ahmed Qenawi',
    url: 'https://example.com',
  },

  currency: 'EGP',
  siteTitle: 'Jym Coach | Fitness & Coaching',
}

export default config
