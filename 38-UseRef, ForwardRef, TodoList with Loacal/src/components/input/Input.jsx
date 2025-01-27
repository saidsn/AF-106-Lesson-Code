import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} {... props} />
    </div>
  );
});

export default Input;
