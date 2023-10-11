import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Categories from "../Views/Categories";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import FilmView from "../Views/Film-view";
import Bookmarks from "../Views/Bookmarks";
import Home from "../Views/Home";

describe("Categories-Page", () => {
  it("should display Categorie", async () => {
    render(
      <MemoryRouter initialEntries={["/Notflix/categories"]}>
        <Routes>
          <Route path="/Notflix/categories" element={<Categories />}></Route>
          <Route path="/Notflix/film-view" element={<FilmView />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const ActionBtn = await screen.findByRole("button", { name: "Action" });

    expect(ActionBtn).toBeInTheDocument();
    await userEvent.click(ActionBtn);
    const film = await screen.findByText("The Dark Knight");

    expect(await screen.findByText("The Dark Knight"));
    await userEvent.click(film);

    expect(await screen.findByText("PG-13")).toBeInTheDocument();
  });
  it("should display bookmark", async () => {
    render(
      <MemoryRouter initialEntries={["/Notflix/categories"]}>
        <Routes>
          <Route path="/Notflix/categories" element={<Categories />}></Route>
          <Route path="/Notflix/bookmarks" element={<Bookmarks />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const BookmarkBTN = await screen.findAllByRole("button", {
      name: "Add to Bookmark",
    });

    const bookmarkNav = await screen.findByText("Bookmarks");

    const firstBookmarkButton = BookmarkBTN.find((button) =>
      /Add to Bookmark/i.test(button.textContent)
    );
    await userEvent.click(firstBookmarkButton);
    await userEvent.click(bookmarkNav);

    expect(
      await screen.findByText("The Shawshank Redemption")
    ).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("delete-button"));
    expect(await screen.findByText("You have no Bookmarked movies"));
  });
});
