export function sortStrings(arr: any[]): string[] {
  const isStringArray = arr.every((i) => typeof i === "string");
  if (isStringArray) {
    return arr.sort();
  }
  throw new Error("error!");
}
