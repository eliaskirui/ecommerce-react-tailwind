import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const ProductPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />

      <div className="flex justify-center mobile:flex-col mt-3 mobile:p-3">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dlYXRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-center">
          <h2 className="title text-4xl mobile:text-[30px]">
            Soft. Cozy. Irresistible{" "}
          </h2>
          <p className="pr-16 text-justify mt-4 mobile:pr-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio
            quidem voluptate cupiditate deserunt iusto!
          </p>
          <p className="mt-7 text-3xl">
            Price: <b>$90</b>
          </p>

          <div className="flex text-2xl mt-7">
            Colors
            <div className="bg-red-500 w-8 h-8 rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-indigo-400"></div>
            <div className="bg-blue-900 w-8 h-8 rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-indigo-400"></div>
            <div className="bg-yellow-500 w-8 h-8 rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-indigo-400"></div>
          </div>

          <div className="mt-7 text-2xl">
            Size
            <select className="ml-3 rounded-lg border-2 border-indigo-500">
              <option selected disabled>
                Select
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn mt-5 mb-5">Add to cart</button>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
