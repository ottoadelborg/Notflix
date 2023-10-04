import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Recommended from "../Components/Recommended";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Recommended Movies", () => {
  it("should display header", () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );
    expect(screen.getByText("Recommended Movies")).toBeInTheDocument();
  });
  it("should display Random Movies", () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });
});
