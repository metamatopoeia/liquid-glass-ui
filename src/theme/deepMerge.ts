function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function deepMerge<T extends Record<string, unknown>>(
  target: T,
  ...sources: Array<Partial<T> | undefined>
): T {
  const result = { ...target } as Record<string, unknown>;

  for (const source of sources) {
    if (!source) continue;

    for (const key of Object.keys(source)) {
      const sourceVal = source[key as keyof typeof source];
      const targetVal = result[key];

      if (isPlainObject(sourceVal) && isPlainObject(targetVal)) {
        result[key] = deepMerge(
          targetVal as Record<string, unknown>,
          sourceVal as Record<string, unknown>,
        );
      } else if (sourceVal !== undefined) {
        result[key] = sourceVal;
      }
    }
  }

  return result as T;
}
