import FilmView from "../Views/Film-view";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("FilmView", () => {
  it("renders movie image on screen", () => {
    render(<FilmView />);
    const movieImage = screen.getByAltText("movie.title");

    expect(movieImage).toBeInTheDocument();
  });
});
