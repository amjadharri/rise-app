import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  radialColor1?: string;
  radialColor2?: string;
}

const FormButton: React.FC<CustomButtonProps> = ({
  label,
  href,
  className,
  onClick,
  radialColor1 = "#835e3b",
  radialColor2 = "#371708",
}) => {
  const buttonContent = (
    <div className="relative p-[2px] rounded-sm bg-gradient-to-b from-[#977749] to-[#977749] overflow-hidden ">
      <button
        onClick={onClick}
        className={`relative group overflow-hidden w-full h-full px-10 py-2 min-w-[120px] text-md text-white shadow-custom-light  ${className}`}
        style={{
          background: `
            radial-gradient(circle, ${radialColor1}, ${radialColor2}), 
            linear-gradient(to bottom, #7d4e22, #d19340)
          `,
        }}
      >
        <div className="relative text-gradient font-bold uppercase z-10">
          {label}
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-red-500/10" />
        </div>

        <div className="absolute -top-[4px] -left-[4px] w-3 h-3 rounded-2xl border-[1.5px] border-[#977749]" />
        <div className="absolute -top-[4px] -right-[4px] w-3 h-3 rounded-2xl border-[1.5px] border-[#977749]" />
        <div className="absolute -bottom-[4px] -left-[4px] w-3 h-3 rounded-2xl border-[1.5px] border-[#977749]" />
        <div className="absolute -bottom-[4px] -right-[4px] w-3 h-3 rounded-2xl border-[1.5px] border-[#977749]" />
      </button>
    </div>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default FormButton;
