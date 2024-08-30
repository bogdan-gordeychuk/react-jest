import { add } from "./index";

test("test with two positive values", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(0, 3)).toBe(3);
  expect(add(2, 5)).toBe(7);
});

test("test addition of positive and negative", () => {
  expect(add(1, -2)).toBe(-1);
  expect(add(5, -3)).toBe(2);
  expect(add(20, -30)).toBe(-10);
});

test("test addition with zero", () => {
  expect(add(0, 1)).toBe(1);
  expect(add(0, -1)).toBe(-1);
  expect(add(0, 0)).toBe(0);
});

test("test with wrong types", () => {
  expect(add(0, "10")).toBe(10);
  expect(add("10", 2)).toBe(12);
  expect(add("0", "5")).toBe(5);
});
