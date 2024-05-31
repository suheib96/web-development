import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("button click flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blau/i });
  expect(buttonElement).toHaveClass("rot");

  // button klicken
  fireEvent.click(buttonElement);
  // buttonelement hat die Klasse "blau"
  expect(buttonElement).toHaveClass("blau");
});

test("checkbox click flow", () => {
  render(<App />);

  //elemente finden
  const buttonElement = screen.getByRole("button", { name: /blau/i });
  const checkBoxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  //check initialer Zustand unserer Elemente
  expect(buttonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();

  // click checkbox um button zu disablen
  fireEvent.click(checkBoxElement);
  expect(checkBoxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("grau");

  // click checkbox um button wieder zu enablen
  fireEvent.click(checkBoxElement);
  expect(checkBoxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("rot");
});
