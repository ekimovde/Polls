export function formatNumber(number: number): string {
  return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(number);
}
