import React from "react";
import { render, screen } from "@testing-library/react";
import RegisterCustomer from "./RegisterCustomer";

test("renders Register Customer form", () => {
  render(<RegisterCustomer />);
  const nameInput = screen.getByLabelText(/name/i);
  const mobileInput = screen.getByLabelText(/mobile/i);
  const emailInput = screen.getByLabelText(/email/i);
  const registerButton = screen.getByText(/register/i);

  expect(nameInput).toBeInTheDocument();
  expect(mobileInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});
