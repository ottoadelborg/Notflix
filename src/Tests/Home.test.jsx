import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Home from "../Views/Home";

describe("Navbar", () => {
  it("should render navigation links", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();
  });
});
