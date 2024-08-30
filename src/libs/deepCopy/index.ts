type Primitive = string | number | boolean | null | undefined;
type DeepCopyable =
  | Primitive
  | { [key: string]: DeepCopyable }
  | DeepCopyable[];

export function deepCopy<T extends DeepCopyable>(val: T): T {
  if (val === null || typeof val !== "object") {
    return val;
  }

  if (Array.isArray(val)) {
    return val.map((item) => deepCopy(item)) as T;
  }

  const newVal: { [key: string]: DeepCopyable } = {};
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      newVal[key] = deepCopy(val[key]);
    }
  }

  return newVal as T;
}
