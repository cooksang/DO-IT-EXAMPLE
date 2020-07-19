import React from "react";
import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  it("renderer error message", () => {
    const wrapper = shallow(<Input name="name" />);
    expect(wrapper.find("error")).toHaveLength(0);
    const expectedErrorMessage = "옳지 못한 값이 입력되었습니다.";
    wrapper.setProps({ errorMessage: expectedErrorMessage });
    expect(wrapper.find("span").prop("className")).toBe("error");
    expect(wrapper.find(".error")).toHaveLength(1);
    expect(wrapper.html()).toContain(expectedErrorMessage);
  });
});
