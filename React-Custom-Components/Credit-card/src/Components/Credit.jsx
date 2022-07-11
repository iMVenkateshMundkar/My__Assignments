import React from "react";
import { useState, useRef } from "react";
import PropTypes from "prop-types";
import CreditItem from "./CreditItem";

function Credit({ length, maxLength, setCreditHandler }) {
  const inputRef = useRef([]);
  const [inputBoxesLen] = useState(new Array(length).fill(1));
  const [creditValue, setCreditValue] = useState(new Array(length).fill(""));

  const handleChange = (e, index) => {
    if (index > 0) {
      creditValue[index] = "-" + e.target.value;
    } else {
      creditValue[index] = e.target.value;
    }
    if (e.target.value.length > 3 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setCreditHandler(creditValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0 && e.target.value.length === 0) {
      inputRef.current[index - 1].focus();
    }
    if (index > 0 && e.target.value > 0) {
      creditValue[index] = "-" + e.target.value;
    } else {
      creditValue[index] = e.target.value;
    }
    setCreditValue(creditValue);
    setCreditHandler(creditValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((_, index) => index < length);

    data.forEach((value, index) => {
      creditValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div className="credit" onPaste={handlePaste}>
      {inputBoxesLen.map((_, index) => {
        return (
          <CreditItem
            key={index}
            onChangeHandler={(e) => handleChange(e, index)}
            onBackSpaceHandler={(e) => handleBackSpace(e, index)}
            maxLength={maxLength}
            ref={(ele) => {
              inputRef.current[index] = ele;
            }}
          />
        );
      })}
    </div>
  );
}

Credit.prototype = {
  length: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
  setCreditHandler: PropTypes.func,
};

export default Credit;
