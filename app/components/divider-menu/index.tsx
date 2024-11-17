"use client";

import Image from "next/image";
import React from "react";

export default function DividerMenu() {
  const menuItems = [
    "Build & Conquer",
    "Real Time Battles",
    "Play to Earn",
    "Trade & Plunder",
    "High-Quality Graphics",
  ];

  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 1024;
  const repeatedItems = isSmallScreen
    ? [...menuItems, ...menuItems, ...menuItems]
    : menuItems;

  return (
    <div className="w-full h-20 bg-[#130f0c] border-t border-b border-[#E4D9BD] border-opacity-30 overflow-hidden">
      <div className="w-full h-full 2xl:max-w-[85rem] mx-auto px-2 sm:px-6 xl:px-10 overflow-hidden">
        <div className="w-full h-full flex items-center">
          <div
            className={`flex items-center gap-10 ${
              isSmallScreen ? "animate-scroll" : ""
            } whitespace-nowrap`}
          >
            {repeatedItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-8 whitespace-nowrap"
              >
                <div className="text-gradient text-base md:text-lg xl:text-xl tracking-wide">
                  {item}
                </div>
                {index % menuItems.length !== menuItems.length - 1 && (
                  <Image
                    src={"/assets/divider-menu-image.svg"}
                    alt=""
                    width={10}
                    height={10}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        /* Disable animation for larger screens */
        @media (min-width: 1024px) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
