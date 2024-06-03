import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("ob ein neuer User abgeschickt werden kann und in der Liste angezeigt wird", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const buttonElement = screen.getByRole("button", { name: /senden/i });

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

  await user.click(nameInput);
  await user.keyboard("suheib");
  await user.click(emailInput);
  await user.keyboard("suheib@suheib.de");

  await user.click(buttonElement);

  const name = screen.getByRole("cell", { name: "suheib" });
  const email = screen.getByRole("cell", { name: "suheib@suheib.de" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
