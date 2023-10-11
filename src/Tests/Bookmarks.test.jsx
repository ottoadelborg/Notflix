import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Bookmarks from "../Views/Bookmarks";
import { BrowserRouter } from "react-router-dom";

describe("navigate to film-view", () => {
  it("should remove a movie from favourites", async () => {
    render(
      <BrowserRouter>
        <Bookmarks />
      </BrowserRouter>
    );
    expect(await screen.findByText("You have no Bookmarked movies"));
    screen.debug();
  });
});
