import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

function Navbar(props) {
  const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px]";
  return (
    <div className="sticky top-0 z-50 bg-green-400 navbar h-[60px] shadow-md">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px] hidden">EN</div>

          <div className="searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-indigo-500 transition-all]">
            <input className="input outline-none mobile:w-[50px]" type="text" />
            <Search className="text-[16px]" />
          </div>
        </div>
        <div className="center flex-1 text-center mobile:ml-6">
          <div className="logo font-bold text-lg mobile:text-sm">
            Winter Shield
          </div>
        </div>
        <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
          <div className={style}>Register</div>
          <div className={style}>Sign in</div>
          <div className={style}>
            <Badge badgeContent={props.cartItems} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
