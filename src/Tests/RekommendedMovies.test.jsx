import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Recommended from "../Components/Recommended";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import FilmView from "../Views/Film-view";

describe("Recommended Movies", () => {
  it("should display header", () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );
    expect(screen.getByText("Recommended Movies")).toBeInTheDocument();
  });

  it("should display Movies", () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("img")).toHaveLength(23);
  });

  it("should display next movie on arrow click left", async () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );

    const user = userEvent.setup();
    const arrowButton = screen.getByTestId("arrowLeft");
    expect(arrowButton).toBeInTheDocument();

    const movies = screen.getAllByRole("img");
    expect(movies[0]).toHaveClass("slide");
    await user.click(arrowButton);

    expect(movies[1]).toHaveClass("slide");
    expect(movies[0]).toHaveClass("slide slide-hidden");
  });

  it("should display next movie on arrow click right", async () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    const arrowButton = screen.getByTestId("arrowRight");
    expect(arrowButton).toBeInTheDocument();

    const movies = screen.getAllByRole("img");
    expect(movies[0]).toHaveClass("slide");
    await user.click(arrowButton);
    expect(movies[0]).toHaveClass("slide-hidden");
    expect(movies[1]).toHaveClass("slide");
  });

  it("should display film view on click movie img", async () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );
    screen.debug();

    const user = userEvent.setup();
    const movies = screen.getAllByRole("img");

    await user.click(movies[0]);
    expect(window.location.pathname).toBe("/Notflix/film-view");

    render(
      <BrowserRouter>
        <FilmView />
      </BrowserRouter>
    );
    expect(screen.getByText("Genre:")).toBeInTheDocument();
    expect(screen.getByText("Actors:")).toBeInTheDocument();
    expect(screen.getByText("Synopsis:")).toBeInTheDocument();
  });
});
