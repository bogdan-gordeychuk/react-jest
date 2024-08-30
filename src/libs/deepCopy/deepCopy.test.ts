import { deepCopy } from "./index";

test("test with array", () => {
  expect(
    deepCopy([{ hello: "world", value: 1, some: [1, 2, { another: "value" }] }])
  ).toEqual([{ hello: "world", value: 1, some: [1, 2, { another: "value" }] }]);
});

test("test with empty array", () => {
  expect(deepCopy([])).toEqual([]);
});

test("test with invalid param", () => {
  expect(deepCopy(null)).toBe(null);
});
