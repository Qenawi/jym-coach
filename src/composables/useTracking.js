// import { db } from '../firebase/config'
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import config from '../config/site'

export function useTracking() {
  const trackOrder = async (planName, price) => {
    try {
      const { storeName, collection: col, subCollection } = config.tracking
      console.log(`[tracking] ${storeName}/${col}/${subCollection}`, { planName, price })
      // await addDoc(collection(db, storeName, col, subCollection), {
      //   type: 'whatsapp_inquiry',
      //   planName,
      //   price,
      //   currency: config.currency,
      //   createdAt: serverTimestamp(),
      // })
    } catch (err) {
      console.warn('Tracking failed:', err)
    }
  }

  return { trackOrder }
}
