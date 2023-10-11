import { describe, it } from "vitest";
import Input from "../Components/Input";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Input", () => {
  it("it should render input component", () => {
    render(
      <BrowserRouter>
        <Input />
      </BrowserRouter>
    );
  });
});
