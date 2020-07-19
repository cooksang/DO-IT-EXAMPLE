import React from "react";
import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  it("assigns the prop value and type", () => {
    const expectedValue = "123";
    const wrapper = shallow(<Input name="name" value={expectedValue} />);
    expect(wrapper.find("input").prop("value")).toBe(expectedValue);
    const { type, value } = wrapper.find("input").props();
    expect(value).toBe(expectedValue);
    expect(type).toBe("text");
  });
});
