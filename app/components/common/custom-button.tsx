import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  label: string;
  href?: string;
  className?: string;
  mainStyle?: string;
  onClick?: () => void;
}

const CustomButton = ({
  label,
  href,
  className,
  mainStyle,
  onClick,
}: CustomButtonProps) => {
  const buttonContent = (
    <div
      className={`relative p-[2px] rounded-sm bg-gradient-to-b from-[#fab254] to-[#c97539] overflow-hidden ${mainStyle}`}
    >
      <button
        onClick={onClick}
        className={`relative group overflow-visible w-full h-full text-md text-white shadow-custom-light px-8 py-2 sm:px-8 sm:py-2 md:px-10 md:py-2 lg:px-9 lg:py-2 xL:px-12 xL:py-2 xl:px-14 xl:py-2  ${className}
        `}
        style={{
          background: `
            radial-gradient(circle, #770709, #190000), 
            linear-gradient(to bottom, #7d4e22, #d19340)
          `,
        }}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/button-stars.svg')",
          }}
        />

        <div className="relative text-gradient font-bold uppercase z-50 whitespace-nowrap overflow-visible">
          {label}
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-red-500/10" />
        </div>

        <div className="absolute -top-[4px] -left-[4px] w-3 h-3 rounded-2xl border-[1.5px] border-[#fab254]" />
        <div className="absolute -top-[4px] -right-[4px] w-3 h-3 rounded-2xl border-[1.5px] border-[#fab254]" />
        <div className="absolute -bottom-[4px] -left-[4px] w-3 h-3 rounded-2xl border-[1.5px] border-[#fab254]" />
        <div className="absolute -bottom-[4px] -right-[4px] w-3 h-3 rounded-2xl border-[1.5px] border-[#fab254]" />
      </button>
    </div>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default CustomButton;
