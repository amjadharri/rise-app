import React from "react";

const BuildArmy: React.FC = () => {
  const headingStyle =
    "lg:text-[45px] relative text-[20px] font-avon font-[400] lg:leading-[52px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#DEC890] to-[#944A00] lg:leading-[60px]";

  const containerShadowStyle = {
    filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6))",
  };

  const headings = [
    "BUILD YOUR ARMY",
    "MASSIVE PVP & PVE BATTLES",
    "WAGE WAR OR FORGE ALLIANCES",
    "CONQUER",
    "&",
    "RULE THE MEME KINGDOMS",
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="sm:bg-cover bg-cover xl:bg-center md:bg-left bg-bottom xl:min-h-screen pb-40 flex justify-center items-center w-full bg-no-repeat lg:py-20 py-10 bg-desktop">
        {/* Content Container */}
        <div className="xl:w-3/5 lg:w-3/4 w-full px-5 mx-auto pt-5 pb-20">
          {/* Map over the headings array */}
          {headings.map((heading, index) => (
            <h1
              key={index}
              className={headingStyle}
              style={containerShadowStyle}
            >
              {heading}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildArmy;
