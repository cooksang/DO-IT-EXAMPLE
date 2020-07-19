import React from "react";
import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  it("renders", () => {
    expect(() => {
      shallow(<Input />);
    }).not.toThrow();
  });
});
