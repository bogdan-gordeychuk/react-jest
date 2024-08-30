import Button from "./index";
import { cleanup, fireEvent, render } from "@testing-library/react";

afterEach(cleanup);

it("increments and decrements the counter", () => {
  const { getByLabelText } = render(<Button />);

  const counter = getByLabelText("counter");
  const incrementButton = getByLabelText("increment");
  const decrementButton = getByLabelText("decrement");

  expect(counter.textContent).toBe("0");

  fireEvent.click(incrementButton);
  expect(counter.textContent).toBe("1");

  fireEvent.click(decrementButton);
  expect(counter.textContent).toBe("0");
});
