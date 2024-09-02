export function unique<T>(arr: T[]): T[] {
  const result: T[] = [];
  const seen = new Set();

  for (const item of arr) {
    const itemString = JSON.stringify(item);
    if (!seen.has(itemString)) {
      seen.add(itemString);
      result.push(item);
    }
  }

  return result;
}
