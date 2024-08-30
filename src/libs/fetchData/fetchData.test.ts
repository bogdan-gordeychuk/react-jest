import { fetchData } from "./index";

it("works with async/await", async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toEqual({ data: "success" });
});

it("works with async/await and resolves", async () => {
  expect.assertions(1);
  await expect(fetchData()).resolves.toEqual({ data: "success" });
});

test("test with mock data", async () => {
  const asyncMock = jest.fn().mockResolvedValue({ data: "success" });
  const result = await asyncMock();

  expect(asyncMock).toHaveBeenCalled();

  expect(result).toEqual({ data: "success" });
});
