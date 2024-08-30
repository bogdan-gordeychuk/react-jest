import { isValidEmail } from "./index";

test("test valid simples email", () => {
  expect(isValidEmail("somemail@mail.ru")).toBe(true);
});

test("test email without dot", () => {
  expect(isValidEmail("myMail@ru")).toBe(false);
});

test("test email without dot and info after", () => {
  expect(isValidEmail("t@t")).toBe(false);
});

test("test email without @", () => {
  expect(isValidEmail("somemail.ru")).toBe(false);
});

test("test valid email 1", () => {
  expect(isValidEmail("________@mail.com")).toBe(true);
});

test("test valid email 2", () => {
  expect(isValidEmail("'email'@example.com")).toBe(true);
});
