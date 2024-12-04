"use client";
import React from "react";
import Slider from "react-slick";
import Heading from "../common/heading";
import { LeftArrow, RightArrow } from "@/app/svg";
import { sliderData } from "./data";
import Image from "next/image";

interface ArrowProps {
  onClick?: () => void;
}

export function SampleNextArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className="flex absolute  xl:right-[3rem] lg:right-1 right-4 lg:top-[45%] md:top-[44%] top-[30%] z-10 cursor-pointer"
    >
      <RightArrow />
    </div>
  );
}

export function SamplePrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className="flex absolute xl:left-[4rem] left-4 md:left-4 lg:left-1 lg:top-[45%] top-[30%] md:top-[44%]   z-10 cursor-pointer"
    >
      <LeftArrow />
    </div>
  );
}

const HeroDetails: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="min-h-screen heros">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={slide.id}>
            <div
              className="bg-cover bg-center bg-no-repeat lg:py-20 py-10 lg:px-10 px-2 min-h-auto lg:max-h-auto"
              style={{ backgroundImage: `url(${slide.bg.src})` }}
            >
              <div className="5xl:max-w-[1800px] 2xl:px-24 xl:px-16 mx-auto py-5 min-h-[60vh] relative">
                <div className="lg:relative flex-col md:flex-row flex w-full h-full lg:min-h-[78vh] min-h-[45vh] overflow-hidden bg-cover bg-no-repeat bg-center ">
                  <Image
                    src={slide.imgSrc}
                    alt="Slide image"
                    layout="fill"
                    className={`!hidden md:!block brightness-125 w-full h-full md:object-cover lg:rounded-2xl rounded-xl object-fill`}
                    style={{
                      maskImage:
                        index % 2 === 0
                          ? "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))"
                          : "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
                      WebkitMaskImage:
                        index % 2 === 0
                          ? "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))"
                          : "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
                    }}
                    priority
                  />

                  <Image
                    src={slide.mobileImgSrc}
                    alt="Slide image"
                    layout="fill"
                    className={`block !relative brightness-125  md:!hidden w-full h-full lg:object-cover lg:rounded-2xl rounded-xl object-fill`}
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                    }}
                    priority
                  />

                  <div
                    className={`relative md:absolute rounded-xl ${
                      index % 2 === 0
                        ? "left-0 2xl:w-1/3 md:w-1/2 w-full md:p-10 px-3 z-20 space-y-6 flex flex-col justify-end md:justify-center h-full text-white"
                        : "right-0 2xl:w-1/3 md:w-1/2 w-full md:p-10 px-3 z-20 space-y-6 flex flex-col justify-end md:justify-center h-full text-white"
                    }`}
                  >
                    <Heading>{slide.title.toUpperCase()}</Heading>
                    {/* <p className="text-gradient font-cinzel tracking-wide pt-5 font-[500] text-center md:text-left text-xs md:text-lg"> */}
                    <p className="text-[#fff1de] text-shadow-effect-para font-cinzel text-sm md:text-lg text-center md:text-left no-scrollbar">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroDetails;
