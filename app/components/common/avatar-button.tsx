"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface AvatarButtonProps {
  src: string;
  alt: string;
  size: number;
  angle: number;
  radius: number;
  isActive?: boolean;
  onClick?: () => void;
}

const AvatarButton: React.FC<AvatarButtonProps> = ({
  src,
  alt,
  size,
  angle,
  radius,
  isActive = false,
  onClick,
}) => {
  const [responsiveSize, setResponsiveSize] = useState(size);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveSize(window.innerWidth < 768 ? size * 0.7 : size);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  return (
    <div
      className="absolute z-10"
      style={{
        width: responsiveSize,
        height: responsiveSize,
        left: `calc(50% + ${x}px)`,
        top: `calc(50% - ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {isActive && (
        <div
          className="absolute inset-0 rounded-l-full transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to right, rgba(228, 217, 189, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
            transform: "scale(1.1)",
            right: "-80%",
          }}
        />
      )}

      <button
        onClick={onClick}
        className={`relative w-full h-full bg-[#1d1107] rounded-full overflow-hidden transition-all duration-300 ${
          isActive
            ? "border-2 border-[#E4D9BD] border-opacity-50 shadow-[0_0_10px_rgba(255,255,255,0.5)] scale-110"
            : "border-2 border-[#E4D9BD] border-opacity-50 shadow-lg scale-100"
        }`}
        style={{
          width: responsiveSize,
          height: responsiveSize,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={responsiveSize}
          height={responsiveSize}
          className={`transition-opacity duration-300 ${
            isActive ? "opacity-100 scale-110" : "opacity-40 scale-100"
          }`}
        />
      </button>
    </div>
  );
};

export default AvatarButton;
