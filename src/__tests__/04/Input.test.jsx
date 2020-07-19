import React from "react";
import ReactDOM from "react-dom";
import Input from "../../03/Input";

describe("<Input>", () => {
  it("render", () => {
    const div = document.createElement("div");
    ReactDOM.render(<input name="name" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
