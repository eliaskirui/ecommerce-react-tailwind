import React, { useState } from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";
const Home = () => {
  const [cartItems, setCartItems] = useState(0);
  return (
    <div>
      <Announce />
      <Navbar cartItems={cartItems} />
      <Slider />
      <Categories />
      <Products cartItems={cartItems} setCartItems={setCartItems} />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
