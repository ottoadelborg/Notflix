import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

    await userEvent.click(screen.getByTestId("add-favorite"));
    render(
      <BrowserRouter>
        <Bookmarks />
      </BrowserRouter>
    );

    const test = await screen.getByText("Remove");
    console.log(test, "log börjar här");

    screen.debug();
  });
  it("should remove a movie from favourites", async () => {
    render(
      <BrowserRouter>
        <Bookmarks />
      </BrowserRouter>
    );
    await screen.getByText("Remove");
    await userEvent.click(screen.getByTestId("delete-button"));
  });
});
