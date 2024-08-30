import { logMessage } from "./index";

test("logMessage calls longer with message", () => {
  const mockLogger = jest.fn();
  logMessage(mockLogger, "test message");
  expect(mockLogger).toHaveBeenCalledWith("test message");
});
