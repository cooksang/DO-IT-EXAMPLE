import React, { Component } from "react";

class RCC extends Component {
  render() {
    function _2_1_1() {
      var string1 = "hi";
      var string2 = "hello";
      var greeting = str1 + " " + string2;
      var product = { name: "도서", price: "4200원" };
      var message =
        "제품" + product.name + "의 가격은" + product.price + "입니다";
      var multiLine = "문자열1\n문자열2";
      var value1 = 1;
      var value2 = 2;
      var boolValue = false;
      var operator1 = "곱셈값은 " + value1 * value2 + "입니다. ";
      var operator2 = "불리언값은 " + (boolValue ? "참" : "거짓") + "입니다. ";
    }

    function _2_1_2() {
      var string1 = "안녕하세요";
      var string2 = "반갑습니다";
      var greeting = `${string1} ${string2}`;

      var product = { name: "도서", price: "4200원" };
      var message = `제품 ${product.name}의 가격은 ${product.price}입니다`;
      var multiLine = `문자열1
        문자열2`;
      var value1 = 1;
      var value2 = 2;
      var boolValue = false;
      var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
      var operator2 = `불리언값은 ${boolValue ? "참" : "거짓"}입니다.`;
    }
    var array1 = ["one", "two"];
    var array2 = ["three", "four"];
    var combined = [array1[0], array1[1], array2[0], array2[1]];
    var combined = array1.concat(array2);
    var combined = [].concat(array1, array2);
    var first = array1[0];
    var second = array1[1];
    var three = array1[2] || "empty";

    function func() {
      var args = Array.prototype.slice.call(this, arguments);
      var first = args[0];
      var others = args.slice(1);
      console.log(args);
      console.log(first);
      console.log(others);
    }
    func();
    var text = "따옴표";
    return <div name="name">{text}</div>;
  }
}

export default RCC;
