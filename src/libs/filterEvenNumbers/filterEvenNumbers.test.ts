import { filterEvenNumbers } from "./index";

test("test with even and odds number", () => {
  expect(filterEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
    0, 2, 4, 6, 8,
  ]);
});

test("test with empty array", () => {
  expect(filterEvenNumbers([])).toEqual([]);
});

test("test with odd numbers array only", () => {
  expect(filterEvenNumbers([0, 1, 3, 5, 7, 9, 11])).toEqual([0]);
});

test("test with even numbers array only", () => {
  expect(filterEvenNumbers([2, 4, 6, 8, 10, 12])).toEqual([2, 4, 6, 8, 10, 12]);
});
