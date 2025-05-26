export function sanitizeFilters<
  T extends Record<string, string | number | undefined>
>(filters: T): Record<string, string> {
  const result: Record<string, string> = {};

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== "" && value !== undefined) {
      result[key] = value.toString();
    }
  });

  return result;
}
