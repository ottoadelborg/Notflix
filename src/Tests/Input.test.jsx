import { describe, it, expect } from "vitest";
import Input from "../Components/Input";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { userEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter, Route, Link } from "react-router-dom";

describe("Input", () => {
  it("it should render input component", () => {
    render(
      <BrowserRouter>
        <Input />
      </BrowserRouter>
    );
  });
});

describe("Movie should appear", () => {
  render(
    <BrowserRouter>
      <Input />
    </BrowserRouter>
  );

  userEvent.click(screen.getByRole("input"));
  fireEvent.change(input, { target: { value: "Gladiator" } });
  expect(input.value).toBe("Gladiator");
});
