import FilmView from "../Views/Film-view";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Filmview", () => {
  it("should display No movie here!", () => {
    render(
      <BrowserRouter>
        <FilmView />
      </BrowserRouter>
    );

    expect(screen.getByText("No movie here!")).toBeInTheDocument();
  });
});
