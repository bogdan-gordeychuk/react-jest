export function add(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    return +a + +b;
  } else return a + b;
}
