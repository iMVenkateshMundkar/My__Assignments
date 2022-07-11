import React, { forwardRef } from "react";

const CreditItem = forwardRef(
  ({ onChangeHandler, onBackSpaceHandler, maxLength }, ref) => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 8) {
        onBackSpaceHandler(e);
      } else {
        onChangeHandler(e);
      }
    };

    return (
      <div>
        <input ref={ref} maxLength={maxLength} onKeyUp={handleKeyUp} />
      </div>
    );
  }
);

export default CreditItem;
