/**
 * Simple cookie-based caching with TTL.
 * Each key gets its own cookie to stay within 4KB per-cookie limit.
 * Default TTL: 30 minutes.
 */

const DEFAULT_TTL = 30 * 60 * 1000 // 30 minutes

export function setCacheItem(key, data, ttl = DEFAULT_TTL) {
  const payload = {
    d: data,
    exp: Date.now() + ttl,
  }
  const json = JSON.stringify(payload)
  // Cookie max is ~4KB, skip if too large
  if (json.length > 3800) {
    console.warn(`Cache: "${key}" too large for cookie (${json.length} chars), skipping`)
    return false
  }
  const expires = new Date(Date.now() + ttl).toUTCString()
  document.cookie = `cache_${key}=${encodeURIComponent(json)}; expires=${expires}; path=/; SameSite=Lax`
  return true
}

export function getCacheItem(key) {
  const name = `cache_${key}=`
  const cookies = document.cookie.split('; ')
  for (const c of cookies) {
    if (c.startsWith(name)) {
      try {
        const payload = JSON.parse(decodeURIComponent(c.substring(name.length)))
        if (payload.exp > Date.now()) {
          return payload.d
        }
        // Expired — clear it
        clearCacheItem(key)
      } catch {
        clearCacheItem(key)
      }
      return null
    }
  }
  return null
}

export function clearCacheItem(key) {
  document.cookie = `cache_${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`
}

export function clearAllCache() {
  document.cookie.split('; ').forEach(c => {
    if (c.startsWith('cache_')) {
      const key = c.split('=')[0].replace('cache_', '')
      clearCacheItem(key)
    }
  })
}
