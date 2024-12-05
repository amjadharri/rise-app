import React from "react";
import Image from "next/image";
import img from "/public/assets/roadmap.jpg";
import img2 from "/public/assets/roadmap_mobile.jpg";

const Roadmap = () => {
  return (
    <>
      <div className="w-full lg:px-20 px-2 py-10">
        <div className="">
          <h1
            className={`lg:text-5xl  font-avon relative text-3xl py-10 uppercase font-[400] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]  `}
          >
            Roadmap
          </h1>
        </div>

        <div className=" flex justify-center h-full w-full ">
          <Image
            src={img}
            alt=""
            className="md:block hidden w-full max-w-[1660px] rounded-2xl"
          />
          <Image src={img2} alt="" className=" md:hidden block w-[90%] rounded-2xl" />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
