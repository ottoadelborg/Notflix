import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Categories from "../Views/Categories";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import FilmView from "../Views/Film-view";

describe("Categories-Page", () => {
  it("should display Categorie", async () => {
    render(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    );

    const ActionBtn = await screen.getByRole("button", { name: /Action/i });

    expect(ActionBtn).toBeInTheDocument();
    await userEvent.click(ActionBtn);
    const film = await screen.getByText("The Dark Knight");
    expect(await screen.findByText("The Dark Knight"));
    await userEvent.click(film);
    expect(await window.location.pathname).toBe("/Notflix/film-view");
    render(
      <BrowserRouter>
        <FilmView />
      </BrowserRouter>
    );
    expect(await screen.getByText("PG-13")).toBeInTheDocument();
  });
});
