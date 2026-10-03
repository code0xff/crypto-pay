import type { Service } from '../types'
import servicesJson from './services.json'

export function loadServices(): Service[] {
  return servicesJson as Service[]
}
