// FactionSlider.tsx
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { factions } from "./data";
import "./faction.css";
import TitleHeading from "../common/title-heading";
import { LeftArrow, RightArrow } from "@/app/svg";

// Type definitions for the Arrow components
interface ArrowProps {
  onClick?: () => void;
}

interface Faction {
  name: string;
  description: string;
  imageUrl: string;
}

export function NextArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className="flex absolute lg:right-[1rem] right-4 lg:top-[35%] top-[40%] z-10 cursor-pointer"
    >
      <RightArrow />
    </div>
  );
}

export function PrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className="flex absolute lg:left-[1rem] left-4 lg:top-[35%] top-[40%] z-10 cursor-pointer"
    >
      <LeftArrow />
    </div>
  );
}

const FactionSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const totalFactions = factions.length;
  const sliderRef = useRef<HTMLDivElement>(null);

  // Touch event states
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Mouse event states for desktop dragging
  const isDragging = useRef<boolean>(false);
  const mouseStartX = useRef<number>(0);
  const mouseEndX = useRef<number>(0);

  // Navigate to the next slide
  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalFactions); // Wraps to the beginning if exceeding totalFactions - 1
  };

  // Navigate to the previous slide with wrap-around
  const handlePrevSlide = () => {
    console.log(
      "New active slide in prev",
      activeSlide,
      (activeSlide - 1 + totalFactions) % totalFactions
    );
    setActiveSlide((prev) => (prev - 1 + totalFactions) % totalFactions); // Wraps to the end if going below 0
  };

  console.log("Active slide is: ", activeSlide);

  // Handle touch events for swiping on mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    // const distance = touchStartX.current - touchEndX.current;
    // const threshold = 50; // Minimum distance for a swipe to be registered
    // if (distance > threshold) {
    //   // Swiped left
    //   handleNextSlide();
    // } else if (distance < -threshold) {
    //   // Swiped right
    //   handlePrevSlide();
    // }
  };

  // Handle mouse events for dragging on desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      mouseEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    // if (isDragging.current) {
    //   const distance = mouseStartX.current - mouseEndX.current;
    //   const threshold = 50; // Minimum distance for a drag to be registered
    //   if (distance > threshold) {
    //     // Dragged left
    //     handleNextSlide();
    //   } else if (distance < -threshold) {
    //     // Dragged right
    //     handlePrevSlide();
    //   }
    //   isDragging.current = false;
    // }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };
  // Handle dot click
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div
      className="w-full xl:min-h-[70vh] pb-20 bg-opacity-10 bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/assets/castle.svg')",
        // height: "100vh",
      }}
    >
      <div className="faction-slider-container max-w-7xl mx-auto ">
        <TitleHeading className="mt-16 lg:mt-10 z-10">
          Meme Kingdom Factions
        </TitleHeading>
        <div className="slider-wrapper h-full flex lg:flex-row flex-col justify-center items-center relative">
          <div
            className="relative w-full flex items-center"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* Slider */}
            <div className="slider">
              {factions.map((faction: Faction, index: number) => {
                let distance = index - activeSlide;
                if (distance > totalFactions / 2) {
                  distance -= totalFactions;
                } else if (distance < -totalFactions / 2) {
                  distance += totalFactions;
                }

                let adjustedDistance = distance;
                // Wrap distances beyond -5 to 5
                if (adjustedDistance > 5) {
                  adjustedDistance = adjustedDistance - totalFactions;
                } else if (adjustedDistance < -5) {
                  adjustedDistance = adjustedDistance + totalFactions;
                }

                const distanceClass =
                  adjustedDistance !== 0
                    ? `slide swiper-slide-inactive ${
                        adjustedDistance > 0
                          ? `distance-next-${Math.abs(adjustedDistance)}`
                          : `distance-prev-${Math.abs(adjustedDistance)}`
                      }`
                    : "slide active-slide";

                return (
                  <div
                    key={index}
                    className={`relative rounded ${distanceClass}`}
                  >
                    <div className="slide-content">
                      <Image
                        src={faction.imageUrl}
                        alt={`${faction.name} image`}
                        layout="fill"
                        className="object-contain rounded-xl"
                        priority
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <PrevArrow onClick={handlePrevSlide} />
            <NextArrow onClick={handleNextSlide} />
            <div className="dots-container">
              {factions.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    activeSlide === index ? "active" : ""
                  } dots`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  &#9679;
                </button>
              ))}
            </div>
          </div>

          <div className="faction-details w-full lg:h-[550px] px-4 text-center mt-8 lg:mt-4 overflow-y-auto lg:pr-20 lg:pl-20">
            <h2 className="font-avon text-gradient text-4xl uppercase mb-4 text-center md:text-left">
              {factions[activeSlide].name}
            </h2>
            <p className="text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-center md:text-left no-scrollbar">
              {factions[activeSlide].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactionSlider;
