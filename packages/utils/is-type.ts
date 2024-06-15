export function isNumber(value: unknown): boolean {
  return typeof value === 'number'
}

export function isString(value: unknown): boolean {
  return typeof value === 'string'
}

export function isBoolean(value: unknown): boolean {
  return typeof value === 'boolean'
}

export function isFunction(value: unknown): boolean {
  return typeof value === 'function'
}

export function isObject(value: unknown): boolean {
  return typeof value === 'object' && value !== null
}
