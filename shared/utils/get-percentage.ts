export function getPercentage(count: number, total = 100): number {
  const percentage = (count / total) * 100;
  return percentage > 100 ? 100 : percentage;
}
