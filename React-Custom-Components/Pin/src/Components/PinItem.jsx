import React, { forwardRef } from "react";

const PinItem = forwardRef(({ onChangeHandler, onBackSpaceHandler }, ref) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      onBackSpaceHandler(e);
    } else {
      onChangeHandler(e);
    }
  };

  return (
    <div>
      <input ref={ref} maxLength={1} onKeyUp={handleKeyUp} />
    </div>
  );
});

export default PinItem;
