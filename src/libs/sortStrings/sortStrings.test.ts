import { sortStrings } from "./index";

test("test sort strings", () => {
  expect(sortStrings(["pen", "apple", "juice"])).toEqual([
    "apple",
    "juice",
    "pen",
  ]);
});

test("test invalid array", () => {
  expect(() => sortStrings([0, "some", "another"] as any[])).toThrow("error!");
});
