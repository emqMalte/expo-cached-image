import { Paths } from 'expo-file-system'

// Directory URI for the cache folder using the new API
export const IMAGE_CACHE_FOLDER = `${Paths.cache.uri}`

export const sanitizeCacheKey = (key: string): string => {
  // Remove any potentially unsafe characters
  // Allow only alphanumeric characters, dashes, and underscores
  return key.replace(/[^a-zA-Z0-9-_]/g, '_')
    // Ensure the key doesn't start with a dash or period
    .replace(/^[-.]/, '_')
    // Limit the length to prevent extremely long filenames
    .slice(0, 100)
}

export const generateCollisionSafeFileName = (key: string): string => {
  // generate a random string to prevent name collisions for edge cases, where multiple downloads occur at the same time with the same filename provided by the server
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}.${key}`
}

export default IMAGE_CACHE_FOLDER
