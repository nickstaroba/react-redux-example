import { render } from "@testing-library/react";
import React from "react";

import { COMPONENT_NAME, HomePage } from "./HomePage";

describe("HomePage", () => {
  test("renders", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector(`.${COMPONENT_NAME}`)).toBeDefined();
  });
});
