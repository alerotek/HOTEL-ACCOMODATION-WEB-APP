// formatters.ts
// Small utilities for formatting dates, currency, and simple analytics helpers.

export function formatCurrency(amount?: number) {
  if (amount == null) return "—";
  return `KSH ${amount.toLocaleString()}`;
}

export function formatDate(iso?: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString();
}
