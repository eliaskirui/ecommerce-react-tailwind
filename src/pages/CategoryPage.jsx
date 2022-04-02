import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

const CategoryPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-3xl">Women's clothes</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex mobile:flex-col">
            <p>Filter by</p>
            <select className="ml-3 border-2 border-indigo-500 rounded-lg">
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <select className="ml-3 border-2 border-indigo-500 rounded-lg mobile:mt-3">
              <option selected disabled>
                Color
              </option>
              <option>Green</option>
              <option>Blue</option>
              <option>Yellow</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort by</p>
            <select className="ml-3 border-2 border-indigo-500 rounded-lg">
              <option>New (first)</option>
              <option>Old (first)</option>
              <option>Price (Asc)</option>
              <option>Price (Des)</option>
            </select>
          </div>
        </div>
      </div>

      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
