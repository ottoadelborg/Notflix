import Home from "../Views/Home";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter, Route, Link } from "react-router-dom";
import Bookmarks from "../Views/Bookmarks";
import userEvent from "@testing-library/user-event";
// Måste fixas, tex i App

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

  it("should navigate to Bookmarks-page", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();

    <MemoryRouter initialEntries={["Notflix/"]} initialIndex={0}>
      <Link to="../Notflix/bookmarks">Bookmarks</Link>
      <Route path="Notflix/bookmarks">{Bookmarks}</Route>
    </MemoryRouter>;

    expect(screen.getByText(/Bookmarks/i)).toBeInTheDocument();
    userEvent.click(screen.getByText("Bookmarks"));

    expect(screen.getByText(/Bookmarks/i)).toBeInTheDocument();
  });
});

describe("Movie should appear", () => {
  it("Movie should apprear and display the right title", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const input = screen.getByRole("textbox");
    userEvent.click(screen.getByTestId("movie-search"));
    userEvent.type("Gladiator");
    expect(input).toHaveValue("Gladiator");

    userEvent.click(screen.getByTestId("search-button"));
    await screen.findByText("Gladiator");
    screen.getByTestId("movie-picture");
  });
});

describe("User searches for movie and clicks on it for full desc", () => {
  it("Movie should apprear and display the right title, then clicks to show full info", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const input = screen.getByTestId("movie-search");
    userEvent.click(screen.getByTestId("movie-search"));
    userEvent.change(input, { target: { value: "Gladiator" } });
    expect(input.value).toBe("Gladiator");
    userEvent.click(screen.getByTestId("search-button"));
    await screen.findByText("Gladiator");
    userEvent.click(screen.getByTestId("movie-picture"));

    expect(window.location.pathname).toBe("/Notflix/film-view");

    render(
      <BrowserRouter>
        <FilmView />
      </BrowserRouter>
    );

    expect(screen.getByText("2000")).toBeInTheDocument();
  });
});
