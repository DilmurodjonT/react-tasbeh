import React, { useState } from "react";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return <div>DocTitleOne</div>;
};

export default DocTitleOne;
