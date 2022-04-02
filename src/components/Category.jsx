import React from "react";

function Category({ item }) {
  return (
    <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative mobile:align-items mobile:content-center">
      <img src={item.src} alt="category_image" className="w-full" />
      <div className="absolute w-full h-full left-0 top-0 items-center flex justify-center flex-col">
        <h2 className="text-white font-medium text-3xl">{item.title}</h2>
        <button className="btn">See more</button>
      </div>
    </div>
  );
}

export default Category;
