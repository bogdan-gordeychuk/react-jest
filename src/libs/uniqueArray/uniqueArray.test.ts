import { unique } from "./index";

test("test with arr numbers", () => {
  expect(unique([1, 2, 2, 4, 5, 5])).toEqual([1, 2, 4, 5]);
});

test("test with arr strings", () => {
  expect(
    unique(["1", "4", "5", "7", "7", "some", "another", "wow!", "some"])
  ).toEqual(["1", "4", "5", "7", "some", "another", "wow!"]);
});

test("test with arr objects", () => {
  expect(
    unique([
      { value: "hello!", another: "wow!" },
      { boogy: "some!", hello: "world!" },
      { value: "goodbye!", boogy: "wow!" },
    ])
  ).toEqual([
    { value: "hello!", another: "wow!" },
    { boogy: "some!", hello: "world!" },
  ]);
});

test("test with empty array", () => {
  expect(unique([])).toEqual([]);
});
