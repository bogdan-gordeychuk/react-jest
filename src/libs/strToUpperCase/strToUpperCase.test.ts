import { toUpperCase } from "./index";

test("test with incorrect data", () => {
  expect(() => toUpperCase({ myValue: 228 })).toThrow("Value is not a string!");
});

test("test with small string", () => {
  expect(toUpperCase("my_little_value")).toBe("MY_LITTLE_VALUE");
});

test("test with camel case string", () => {
  expect(toUpperCase("sOmE bIg VaLuE, oH , I m F i N e!")).toBe(
    "SOME BIG VALUE, OH , I M F I N E!"
  );
});

test("test with only lowercase", () => {
  expect(toUpperCase("onlylowercasestring")).toBe("ONLYLOWERCASESTRING");
});
