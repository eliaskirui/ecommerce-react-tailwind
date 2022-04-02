import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { ApiSlides } from "../apifolder/SliderApi";
import "./Slider.css";

const Slider = () => {
  //useState hooks
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  const prvSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between mobile:hidden">
      <div className={arrowStyle}>
        <ArrowLeftOutlined onClick={prvSlide} />
      </div>

      {/* slide div */}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-full h-[500px] justify-center items-center shadow-2xl rounded-lg border-gray-400 border-10px overflow-hidden relative` +
                slide.background
              }
            >
              <div className="slide flex items-center justify-center h-full">
                <div className="forImage flex flex-1 justify-center items-center h-full">
                  <img
                    className="h-full object-cover"
                    src={slide.src}
                    alt="slide_image"
                  />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-5xl">{slide.content.h2}</h2>
                  <p className="text-3xl">{slide.content.p}</p>
                  <button className="btn">Order Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}

      <div className={arrowStyle}>
        <ArrowRightOutlined onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
