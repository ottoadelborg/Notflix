import Home from "../Views/Home";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Bookmarks from "../Views/Bookmarks";
import userEvent from "@testing-library/user-event";
import Categories from "../Views/Categories";
import FilmView from "../Views/Film-view";
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

  it("should navigate to Home", async () => {
    render(
      <MemoryRouter initialEntries={["/Notflix/"]}>
        <Routes>
          <Route path="/Notflix/categories" element={<Categories />}></Route>
          <Route path="/Notflix" element={<Home />}></Route>
        </Routes>
      </MemoryRouter>
    );
    const CategorieNav = await screen.findByText("Categories");
    await userEvent.click(CategorieNav);
    expect(await screen.findByText("Drama")).toBeInTheDocument();
  });
});

describe("Movie should appear", () => {
  it("Movie should apprear and display the right title", async () => {
    render(
      <MemoryRouter initialEntries={["/Notflix/"]}>
        <Routes>
          <Route path="/Notflix/" element={<Home />}></Route>
          <Route path="/Notflix/film-view" element={<FilmView />}></Route>
        </Routes>
      </MemoryRouter>
    );
    const input = await screen.findByRole("movie-search");
    await userEvent.click(await screen.findByRole("movie-search"));
    await userEvent.type(input, "Gladiator");
    await userEvent.click(screen.getByTestId("search-button"));
    expect(await screen.findByText("Gladiator")).toBeInTheDocument();
    expect(await screen.findByRole("movie-picture")).toBeInTheDocument();
  });
});

describe("User searches for movie and clicks on it for full desc", () => {
  it("Movie should apprear and display the right title, then clicks to show full info", async () => {
    render(
      <MemoryRouter initialEntries={["/Notflix/"]}>
        <Routes>
          <Route path="/Notflix/" element={<Home />}></Route>
          <Route path="/Notflix/film-view" element={<FilmView />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const input = screen.getByRole("movie-search");
    await userEvent.click(screen.getByRole("movie-search"));
    await userEvent.type(input, "Gladiator");
    await userEvent.click(screen.getByTestId("search-button"));
    expect(await screen.findByText("Gladiator")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("movie-picture"));
    expect(screen.getByText("2000")).toBeInTheDocument();
  });
});
describe("User searches for movie and clicks on it for full desc then adds to favorites", () => {
  it("Movie should apprear and display the right title, then clicks to show full info, then adds the displayed movie to bookmarks", async () => {
    render(
      <MemoryRouter initialEntries={["/Notflix/"]}>
        <Routes>
          <Route path="/Notflix/" element={<Home />}></Route>
          <Route path="/Notflix/film-view" element={<FilmView />}></Route>
          <Route path="/Notflix/bookmarks" element={<Bookmarks />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const input = screen.getByRole("movie-search");
    await userEvent.click(screen.getByRole("movie-search"));
    await userEvent.type(input, "Gladiator");
    await userEvent.click(screen.getByTestId("search-button"));
    expect(await screen.findByText("Gladiator")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("movie-picture"));
    expect(screen.getByText("2000")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("add-favorite"));
    const bookmarkNav = await screen.findByText("Bookmarks");
    await userEvent.click(bookmarkNav);
    expect(await screen.findByText("Gladiator")).toBeInTheDocument();
  });
});
