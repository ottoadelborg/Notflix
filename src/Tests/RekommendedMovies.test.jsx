import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RecomendedMovies from "../Components/RecomendedMovies";

describe("Recommended Movies", () => {
  it("should display header", () => {
    render(<RecomendedMovies />);
    expect(screen.getByText("Recommended Movies")).toBeInTheDocument();
  });
}
  /*   it("should display Random Movies", () => {
    render(<RecomendedMovies />);
    expect(screen.getAllByRole("img")).toHaveLength(5);
  });
});
