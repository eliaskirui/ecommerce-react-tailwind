import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";

const Footer = () => {
  const styleIcon = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center p-2 max-w mobile:flex-col mobile:items-start ">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-xl">CodeMaster</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, fuga.
          Lorem ipsum dolor sit amet.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={styleIcon + " bg-blue-700"}>
            <Facebook />
          </div>
          <div className={styleIcon + " bg-orange-500"}>
            <Instagram />
          </div>

          <div className={styleIcon + " bg-red-600"}>
            <Pinterest />
          </div>

          <div className={styleIcon + " bg-sky-400"}>
            <Twitter />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">Nairobi</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">+2547000000</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined />
          <p className="pl-3">example@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
