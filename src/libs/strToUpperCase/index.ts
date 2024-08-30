export function toUpperCase(str: unknown): string {
  if (typeof str === "string") {
    return str.toUpperCase();
  }
  throw new Error("Value is not a string!");
}
