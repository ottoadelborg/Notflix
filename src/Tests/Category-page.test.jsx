import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Categories from "../Views/Categories";
import { BrowserRouter } from "react-router-dom";

describe("Recommended Movies", () => {
  it("should display header", () => {
    render(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    );
  });
});
