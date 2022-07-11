import React from "react";
import { useState, useRef } from "react";
import PropTypes from "prop-types";
import PinItem from "./PinItem";

function Pin({ length, setPinHandler }) {
  const inputRef = useRef([]);
  const [inputBoxesLen] = useState(new Array(length).fill(1));
  const [pinValue, setPinValue] = useState(new Array(length).fill(""));

  const handleChange = (e, index) => {
    pinValue[index] = e.target.value;
    setPinValue(pinValue);
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setPinHandler(pinValue.join(""));
    // console.log(pinValue);
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    pinValue[index] = e.target.value;
    setPinValue(pinValue);
    setPinHandler(pinValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);

    data.forEach((value, index) => {
      pinValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div className="pin" onPaste={handlePaste}>
      {inputBoxesLen.map((_, index) => {
        return (
          <PinItem
            key={index}
            onChangeHandler={(e) => handleChange(e, index)}
            onBackSpaceHandler={(e) => handleBackSpace(e, index)}
            ref={(ele) => {
              inputRef.current[index] = ele;
            }}
          />
        );
      })}
    </div>
  );
}

Pin.prototype = {
  length: PropTypes.number.isRequired,
  setPinHandler: PropTypes.func,
};

export default Pin;
