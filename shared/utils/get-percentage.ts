export function getPercentage(progress: number, total = 100): number {
  const percentage = (progress / total) * 100;
  return percentage > 100 ? 100 : percentage;
}
