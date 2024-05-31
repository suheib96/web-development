import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";

test("ob 2 inputfelder und ein button vorhanden ist", () => {
  render(<UserForm></UserForm>);
  const buttonElement = screen.getByRole("button");
  //   const inputElementName = screen.getByRole("textbox", {name:/name/i})
  //   const inputElementEmail = screen.getByRole("textbox", {name:/email/i})
  const inputElements = screen.getAllByRole("textbox");

  //screen.logTestingPlaygroundURL() -> erstellt eine Playground URL, die einen
  //dabei unterstützt korrekte Queries für die Elemente zu finden
  expect(buttonElement).toBeInTheDocument();

  //   expect(inputElementName).toBeInTheDocument()
  //   expect(inputElementEmail).toBeInTheDocument()
  expect(inputElements).toHaveLength(2);
});
