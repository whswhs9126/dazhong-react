import { get } from '../get.js'

export function getAdDate() {
  const result = get('/api/homead')
  return result
}