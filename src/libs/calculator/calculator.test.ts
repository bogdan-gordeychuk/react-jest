import { calculator } from "./index";

test("sum two params", () => {
  expect(calculator(1, -5, "add")).toBe(-4);
});

test("substract two params", () => {
  expect(calculator(0, 4, "subtract")).toBe(-4);
});

test("multiply on zero", () => {
  expect(calculator(0, 2, "multiply")).toBe(0);
});

test("multiply two nums", () => {
  expect(calculator(-5, -2, "multiply")).toBe(10);
});

test("divide on zero", () => {
  expect(() => calculator(5, 0, "divide")).toThrow("Division by zero");
});

test("divide two nums", () => {
  expect(calculator(4, 2, "divide")).toBe(2);
});

test("incorrect operation", () => {
  expect(() => calculator(5, 0, "boobs" as any)).toThrow("Invalid operation");
});
