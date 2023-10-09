import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Home from "../Views/Home";
import { BrowserRouter } from "react-router-dom";
import FilmView from "../Views/Film-view";

describe("Test av funktion som kräver alla views", () => {
  it("should display Film-view on click Recommended movies", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const user = userEvent.setup();
    const movie = screen.getAllByRole("img");
    screen.debug();
    await user.click(movie[1]);
    console.log(movie[0], "consolelOg ");

    render(
      <BrowserRouter>
        <FilmView />
      </BrowserRouter>
    );
    expect(window.location.pathname).toBe("/Notflix/film-view");
    expect(screen.findByText("Genre:"));
  });
});
