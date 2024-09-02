import { countdown } from "./index";

test("calls callback after countdown", () => {
  jest.useFakeTimers();
  const mockCallback = jest.fn();
  countdown(1, mockCallback);
  jest.advanceTimersByTime(1000); // перемотка вперед, пока не будут выполнены таймеры
  expect(mockCallback).toHaveBeenCalled(); // проверка вызова таймера
  jest.useRealTimers(); // восстановить все таймеры
});
