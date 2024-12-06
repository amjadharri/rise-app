"use client";

import React from "react";

interface CardProps {
  title: string;
  description: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ title, description, subtitle }) => {
  return (
    <div   className="relative lg:px-5 px-2 backdrop-blur-[3px] lg:max-w-[538px] lg:h-[322px] max-w-[345px] h-[206px] overflow-hidden flex flex-col justify-center items-center lg:gap-4 gap-1 bg-[url('/assets/buyframe.png')] bg-cover bg-center"
>
     
     <h1 className="lg:text-[38.36px] text-[25px] lg:leading-[46px] leading-[30px] font-bold bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] bg-clip-text text-transparent text-center">
        {title}
      </h1>
        <p
          className="text-center text-[#FFF1DE] font-medium 
             text-[10px] lg:leading-[20px] leading-[15px]
             lg:text-[18px]   
      "
        >
          {description}
        </p>
        <h1 className="lg:text-[38.36px] mt-2  text-[25px] lg:leading-[46px] leading-[30px] font-bold bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] bg-clip-text text-transparent text-center">
          {subtitle}
        </h1>
    </div>
  );
};

export default Card;
