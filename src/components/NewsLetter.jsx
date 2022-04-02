import React from "react";
import { Send } from "@material-ui/icons";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center h-[350px] w-full flex-col bg-indigo-700 ">
      <h1 className="text-5xl font-bold text-white"> NewsLetter</h1>
      <h2 className="text-xl mt-2 mobile:p-3 mobile:text-center">
        For amazing products we are just a click away:)
      </h2>
      <div className="mt-[3rem] flex items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-full overflow-hidden mobile:min-w-[15rem]">
        <input
          className="border-none pl-5 flex-[7] outline-none"
          type="text"
          placeholder="email"
        />
        <button className="bg-yellow-500 flex-1 h-full">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
