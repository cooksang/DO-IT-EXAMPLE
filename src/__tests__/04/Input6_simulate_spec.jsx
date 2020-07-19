import React from "react";
import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  it("calls back onChange on input change", () => {
    const changeStub = jest.fn();
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />);
    expect(changeStub).not.toHaveBeenCalled();
    const expectedTargetValue = "updated input";
    wrapper
      .find("input")
      .simulate("change", { target: { value: expectedTargetValue } });
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith("test_name", expectedTargetValue);
  });
});
