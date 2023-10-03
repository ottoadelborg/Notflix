import Home from "../Views/Home";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter, Route, Link } from "react-router-dom";
import Bookmarks from "../Views/Bookmarks";

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
      <Link to="../Notflix/bookmark">Bookmarks</Link>
      <Route path="Notflix/bookmarks">{Bookmarks}</Route>
    </MemoryRouter>;

    expect(screen.getByText(/Bookmarks/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText("Bookmarks"));

    expect(screen.getByText(/Bookmarks/i)).toBeInTheDocument();
  });
});
