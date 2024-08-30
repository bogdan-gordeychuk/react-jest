import Dropdown from "./index";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

afterEach(cleanup);

it("renders with initial value", () => {
  render(<Dropdown />);

  // Проверяем, что начальное значение установлено
  const firstElem = screen.getByLabelText("first-elem");
  expect(firstElem).toHaveTextContent("Valuawdawdawdawdawde");
});

it("opens dropdown on click", () => {
  render(<Dropdown />);

  // Проверяем, что начальное значение установлено
  const firstElem = screen.getByLabelText("first-elem");

  // Кликаем по элементу, чтобы открыть список
  fireEvent.click(firstElem);

  // Проверяем, что список появился
  const dropdownList = screen.getByLabelText("dropdown-list");
  expect(dropdownList).toBeInTheDocument();
});

it("selects an item and closes dropdown", () => {
  render(<Dropdown />);

  // Кликаем по элементу, чтобы открыть список
  const firstElem = screen.getByLabelText("first-elem");
  fireEvent.click(firstElem);

  // Проверяем, что список появился
  const dropdownList = screen.getByLabelText("dropdown-list");
  expect(dropdownList).toBeInTheDocument();

  // Кликаем по второму элементу в списке
  const secondItem = screen.getByLabelText("item-elem-1");
  fireEvent.click(secondItem);

  // Проверяем, что список закрылся и элемент выбран
  expect(screen.queryByLabelText("dropdown-list")).not.toBeInTheDocument();
  expect(firstElem).toHaveTextContent("Valueawdwadwad");
});
