export function ensureArray(value: any) {
  return Array.isArray(value) ? value : [value]
}
