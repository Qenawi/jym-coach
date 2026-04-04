import config from '../config/site'

const KEY = config.siteKey

export function useTracking() {
  const trackOrder = async (planName, duration) => {
    if (config.demoMode) {
      console.log('[demo tracking]', { planName, duration })
      return
    }

    try {
      const { db } = await import('../firebase/config')
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore')
      await addDoc(collection(db, 'sites', KEY, 'tracking'), {
        type: 'whatsapp_inquiry',
        planName,
        duration,
        createdAt: serverTimestamp(),
      })
    } catch (err) {
      console.warn('Tracking failed:', err)
    }
  }

  return { trackOrder }
}
