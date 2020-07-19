import React from "react";
import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Input name="name" />);
    }).not.toThrow();
  });

  describe("contains <input>", () => {
    it("renders one input", () => {
      const wrapper = shallow(<Input name="name" />);
      expect(wrapper.find("input")).toHaveLength(1);
      expect(wrapper.find("label")).toHaveLength(1);
    });
  });
});
