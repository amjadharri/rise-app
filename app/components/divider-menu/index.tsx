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

  // Safe screen size check
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
                    src="/assets/divider-menu-image.svg"
                    alt="Divider"
                    width={10}
                    height={10}
                    className="inline-block"
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

        @media (min-width: 1200px) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}