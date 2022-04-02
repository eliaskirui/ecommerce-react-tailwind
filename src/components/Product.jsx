import {
  SearchOutlined,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import { React, useRef, useState } from "react";

const Product = (props) => {
  const likeIcon = useRef(null);
  const [hoverEffect, setHoverEffects] = useState("opacity-0");
  const handleHoverEnter = () => {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0,0.2)]");
  };

  const handleHoverExit = () => {
    setHoverEffects(" opacity-0");
  };
  const iconStyle =
    "h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer m-3 cursor-pointer hover:bg-indigo-500 hover;text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
  return (
    <div
      className="flex flex-1 items-center justify-center min-w-[250px] min-h-[350px]] overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={props.item.src} alt="product_image" className="rounded-lg" />
      <div
        className={
          `flex items-center justify-center w-full h-full absolute ease-in duration-100` +
          hoverEffect
        }
      >
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
