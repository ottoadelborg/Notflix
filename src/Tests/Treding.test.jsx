import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Trending from "../Components/Trending";

describe("Recommended Movies", () => {
  it("should display header", () => {
    render(
      <BrowserRouter>
        <Trending />
      </BrowserRouter>
    );
    expect(screen.getByText("Trending Movies")).toBeInTheDocument();
  });
  it("should display header", () => {
    render(
      <BrowserRouter>
        <Trending />
      </BrowserRouter>
    );
  });
});
