import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Trending from "../Components/Trending";
import userEvent from "@testing-library/user-event";

describe("Recommended Movies", () => {
  it("should display header", () => {
    render(
      <BrowserRouter>
        <Trending />
      </BrowserRouter>
    );
    expect(screen.getByText("Trending Movies")).toBeInTheDocument();
  });
  it("should display movie", () => {
    render(
      <BrowserRouter>
        <Trending />
      </BrowserRouter>
    );

    expect(screen.getAllByRole("img")).toHaveLength(7);
  });

  it("should display next movie on arrow click left", async () => {
    render(
      <BrowserRouter>
        <Trending />
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
        <Trending />
      </BrowserRouter>
    );

    const user = userEvent.setup();
    const arrowButton = screen.getByTestId("arrowRight");

    expect(arrowButton).toBeInTheDocument();

    const movies = screen.getAllByRole("img");
    expect(movies[0]).toHaveClass("slide");
    await user.click(arrowButton);

    expect(movies[1]).toHaveClass("slide");
  });
});
