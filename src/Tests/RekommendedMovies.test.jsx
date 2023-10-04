import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Recommended from "../Components/Recommended";
import { BrowserRouter } from "react-router-dom";

//import userEvent from "@testing-library/user-event";

describe("Recommended Movies", () => {
  it("should display header", () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );
    expect(screen.getByText("Recommended Movies")).toBeInTheDocument();
  });
  it("should display Random Movies", () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });
  /*   it("should display Film-view on click whith info about the movie", async () => {
    render(
      <BrowserRouter>
        <Recommended />
      </BrowserRouter>
    );

    const user = userEvent.setup();
    const movie = screen.getAllByRole("img");
    await user.click(movie[0]);
    expect(await screen.findByText("Genre"));
  }); */
});
