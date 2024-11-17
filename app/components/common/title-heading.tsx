import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string; // If you want to pass additional styles
}

const TitleHeading: React.FC<Props> = ({ children, className }) => {
  const containerShadowStyle = {
    filter: "drop-shadow(0px 0px 15px #AA8246)",
  };
  return (
    <div className="flex justify-center items-center w-full lg:pt-10 lg:pb-20 py-5 px-5 ">
      <h1
        className={`lg:text-5xl relative text-3xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]   ${className}`}
        style={containerShadowStyle}
      >
        {children}
      </h1>
    </div>
  );
};

export default TitleHeading;
