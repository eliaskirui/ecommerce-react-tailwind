import {
  SearchOutlined,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import { React, useEffect, useRef, useState } from "react";

const Product = (props) => {
  const likeIcon = useRef(null);
  const [addedTOCart, setAdded] = useState(false);
  const [hoverEffect, setHoverEffects] = useState("opacity-0");
  const [liked, setLiked] = useState(false);
  const handleHoverEnter = () => {
    setHoverEffects("opacity-1 bg-[rgba(0,0,0,0,0.2)]");
  };

  const handleHoverExit = () => {
    setHoverEffects("opacity-0");
  };

  useEffect(() => {
    setHoverEffects("opacity-0");
  }, []);
  const handleLike = () => {
    if (liked == true) {
      setLiked(false);
    }
    setLiked(true);
  };
  const AddOrRemove = () => {
    if (addedTOCart == true) {
      setAdded(false);
      props.setCartItems(props.cartItems - 1);
    } else {
      setAdded(true);
      props.setCartItems(props.cartItems + 1);
    }
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
        className={`flex items-center justify-center w-full h-full absolute ease-in duration-100  ${hoverEffect}`}
      >
        <div className={iconStyle} onClick={AddOrRemove}>
          <ShoppingCartOutlined />
        </div>
        <div
          className={`${iconStyle} ${
            liked ? "bg-red-500 text-white" : "bg-white text-black"
          }`}
          onClick={handleLike}
        >
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
