export function generateUnixTimestamp(): number {
  return Math.round((new Date()).getTime());
}
