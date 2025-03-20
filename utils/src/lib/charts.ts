/**
 * Creates a dynamic formatter function for chart axis values based on data magnitude
 *
 * @param data - The dataset containing the values to analyze
 * @param keys - Array of object keys to consider when finding max value
 * @returns A formatter function that converts numbers to formatted strings
 */
export const getDynamicFormatter = <T extends Record<string, any>>(
  data: T[],
  keys: (keyof T)[]
): ((value: number) => string) => {
  // Find the maximum value in the data for the specified keys
  const maxValue = Math.max(
    ...data.flatMap((item) =>
      keys.map((key) => {
        const value = item[key];
        return typeof value === 'number' ? value : 0;
      })
    )
  );

  // Determine the appropriate scale based on the maximum value
  if (maxValue >= 1000000000) {
    // Billions - format as $X.XB
    return (value: number): string =>
      `$${(value / 1000000000).toLocaleString(undefined, {
        maximumFractionDigits: 1,
      })}B`;
  } else if (maxValue >= 1000000) {
    // Millions - format as $X.XM
    return (value: number): string =>
      `$${(value / 1000000).toLocaleString(undefined, {
        maximumFractionDigits: 1,
      })}M`;
  } else if (maxValue >= 1000) {
    // Thousands - format as $X.Xk
    return (value: number): string =>
      `$${(value / 1000).toLocaleString(undefined, {
        maximumFractionDigits: 1,
      })}k`;
  } else {
    // Regular numbers - format as $X,XXX
    return (value: number): string => `$${value.toLocaleString()}`;
  }
};
