export function roundTo(num, precision = 0) {
  const mult = Math.pow(10, precision)
  return Math.round(num * mult) / mult
}
