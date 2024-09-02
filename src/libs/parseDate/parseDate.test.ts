import { parseDate } from "./index";

test("test correct date", () => {
  expect(parseDate(new Date())).toEqual({ year: 2024, month: 8, day: 2 });
});

test("test with another date", () => {
  expect(parseDate(new Date("2002, 12, 31"))).toEqual({
    year: 2002,
    month: 11,
    day: 31,
  });
});

test("test with seconds date", () => {
  expect(parseDate(new Date(123123123123))).toEqual({
    year: 1973,
    month: 10,
    day: 26,
  });
});

test("test with incorrect object", () => {
  expect(() => parseDate({})).toThrow("invalid input!");
});

test("test with undefined", () => {
  expect(() => parseDate(undefined)).toThrow("invalid input!");
});

test("test with null", () => {
  expect(() => parseDate(null)).toThrow("invalid input!");
});
