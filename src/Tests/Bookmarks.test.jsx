import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilmView from "../Views/Film-view";
import Categories from "../Views/Categories";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Bookmarks from "../Views/Bookmarks";
import { MemoryRouter, Route, Link } from "react-router-dom";

describe("navigate to film-view", () => {
  it("should navigate from categories to film-view, and click add to favourite, then render the selected movie", async () => {
    render(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    );

    expect(screen.getByText("The Shawshank Redemption")).toBeInTheDocument();
    fireEvent.click(screen.getByText("The Shawshank Redemption"));
    expect(await window.location.pathname).toBe("/Notflix/film-view");
    render(
      <BrowserRouter>
        <FilmView />
      </BrowserRouter>
    );
    await screen.findByText("1994");

    userEvent.click(screen.getByTestId("add-favorite"));

    <MemoryRouter initialEntries={["Notflix/film-view"]}>
      <Link to="../Notflix/bookmarks">Bookmarks</Link>
      <Route path="Notflix/bookmarks">{Bookmarks}</Route>
    </MemoryRouter>;

    screen.findByText("Remove");
    screen.findByText("The Shawshank Redemption");
  });
});
