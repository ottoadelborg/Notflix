import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Test av funktion som kräver alla views", () => {
  it("should display Film-view on click Recommended movies", async () => {
    render(<App />);
    const user = userEvent.setup();
    const movie = screen.getAllByRole("img");
    await user.click(movie[0]);
    expect(await screen.findByText("Genre:"));
  });
});
