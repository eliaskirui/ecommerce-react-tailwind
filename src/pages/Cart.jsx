import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Announce from "../components/Announce";
import Counter from "../components/Counter";

const Cart = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-indigo-500 border-2 border-indigo-500">
            Continue Shopping
          </button>
          <div className="flex underine text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3 mobile:text-center">
            <p>Items in your cart: 5</p>
            <p className="ml-5">Whitelist Item: 0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>

        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1">
            <div className="flex w-full h-auto items-center mobile:flex-col">
              <div className="product flex self-start pl-5 mt-5 mb-5">
                <img
                  className="w-[7.2rem] h-4/5 rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://media.istockphoto.com/photos/blue-tshirt-clipping-path-picture-id465485415?b=1&k=20&m=465485415&s=170667a&w=0&h=VaD_NRgo9mK3E3_4AmGMT9kpUUrSOdLCKVs8W07IU2A="
                  alt="product_image"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>12341256
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Basic tees
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto mobile:mt-3">
                <Counter />

                <p className="flex items-center justify-center text-4xl mt-4">
                  <b>$90</b>
                </p>
              </div>
            </div>

            <hr className="mt-7 mb-7" />

            {/* 2nd product */}

            <div className="flex w-full h-auto items-center mobile:flex-col">
              <div className="product flex self-start pl-5 mb-5 mt-5">
                <img
                  className="w-[7.2rem] h-4/5 rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://media.istockphoto.com/photos/portrait-of-young-woman-with-long-hair-in-a-white-jacket-and-mittens-picture-id1289723621?b=1&k=20&m=1289723621&s=170667a&w=0&h=wBhHK9KBJp_DtpCBDv0OBfaGi5YJCaB8hLFzudNkhFs="
                  alt="product_image"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>12341256
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Basic tees
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto mobile:mt-3">
                <Counter />

                <p className="flex items-center justify-center text-4xl mt-4">
                  <b>$90</b>
                </p>
              </div>
            </div>

            <hr className="mt-7 mb-7" />
          </div>
          <div className="flex-[0.4] w-auto h-[50vh] border-2 border-indigo-500 rounded-md shadow-lg flex flex-col items-center p-6">
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex justify-between mt-3 w-full">
              <p>Subtotal</p>
              <p>$180</p>
            </div>

            <div className="flex justify-between mt-3 w-full">
              <h1>Shipping</h1>
              <p>$45</p>
            </div>

            <div className="flex justify-between mt-3 w-full">
              <h1>Shipping discount</h1>
              <p>$25</p>
            </div>
            <div className="flex justify-between mt-3 w-full text-3xl font-bold">
              <p>Total</p>
              <p>$200</p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Cart;
