import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Quantity
        <div className="ml-5 shadow-md flex">
          <div
            onClick={() => {
              if (count !== 0) {
                setCount(count - 1);
              }
            }}
            className="bg-indigo-700 rounded-l-md text-white w-8 flex items-center justify-center cursor pointer"
          ></div>
          <div className="border-indigo-700 w-8 flex items-center justify-center border-[1px]">
            {count}
          </div>
          <div
            onClick={() => {
              if (count < 100) {
                setCount(count + 1);
              }
            }}
            className="bg-indigo-700 rounded-r-md text-white w-8 flex items-center justify-center cursor pointer"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
