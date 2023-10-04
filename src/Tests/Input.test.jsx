import { describe, it, expect } from "vitest";
import Input from "../Components/Input";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import FilmView from "../Views/Film-view";

describe("Input", () => {
  it("it should render input component", () => {
    render(
      <BrowserRouter>
        <Input />
      </BrowserRouter>
    );
  });
});

describe("Movie should appear", () => {
  it("Movie should apprear and display the right title", async () => {
    render(
      <BrowserRouter>
        <Input />
      </BrowserRouter>
    );

    const input = screen.getByTestId("movie-search");
    fireEvent.click(screen.getByTestId("movie-search"));
    fireEvent.change(input, { target: { value: "Gladiator" } });
    expect(input.value).toBe("Gladiator");

    userEvent.click(screen.getByTestId("search-button"));
    await screen.findByText("Gladiator");
    screen.getByTestId("movie-picture");
  });
});

describe("User searches for movie and clicks on it for full desc", () => {
  it("Movie should apprear and display the right title, then clicks to show full info", async () => {
    render(
      <BrowserRouter>
        <Input />
      </BrowserRouter>
    );

    const input = screen.getByTestId("movie-search");
    fireEvent.click(screen.getByTestId("movie-search"));
    fireEvent.change(input, { target: { value: "Gladiator" } });
    expect(input.value).toBe("Gladiator");
    userEvent.click(screen.getByTestId("search-button"));
    await screen.findByText("Gladiator");
    fireEvent.click(screen.getByTestId("movie"));

    expect(window.location.pathname).toBe("/Notflix/film-view");

    render(
      <BrowserRouter>
        <FilmView />
      </BrowserRouter>
    );

    expect(screen.getByText("2000")).toBeInTheDocument();
  });
});

describe("User searches for movie and clicks on it for full desc then adds to favorites", () => {
  it("Movie should apprear and display the right title, then clicks to show full info, then adds the displayed movie to bookmarks", async () => {
    render(
      <BrowserRouter>
        <Input />
      </BrowserRouter>
    );

    const input = await screen.getByTestId("movie-search");
    fireEvent.click(screen.getByTestId("movie-search"));
    fireEvent.change(input, { target: { value: "Gladiator" } });
    expect(input.value).toBe("Gladiator");
    userEvent.click(screen.getByTestId("search-button"));
    await screen.findByText("Gladiator");
    fireEvent.click(screen.getByTestId("movie"));

    expect(await window.location.pathname).toBe("/Notflix/film-view");
  });
});
