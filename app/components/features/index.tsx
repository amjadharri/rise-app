import React, { FC } from "react";
import Section from "../common/section";
import TitleHeading from "../common/title-heading";
import Image from "next/image";
import mobile from "/public/assets/mobile.png";
import mask from "/public/assets/featuermask.png";
import DownloadBtns from "../common/download-btns";

type Props = object;

const Features: FC<Props> = () => {
  const features = [
    "Build and customize your city",
    "Gather resources",
    "Grow economy",
    "Research technology",
    "Explore the meme kingdoms lore",
    "Faction storylines",
    "Quests and Missions",
    "Raids and Dungeons",
  ];
  return (
    <div className="relative">
      <Section>
        <div className="2xl:min-h-auto w-full pb-40 lg:pb-40">
          <TitleHeading>Build, Conquer, Rise and Earn</TitleHeading>

          <div className="grid xl:grid-cols-2 grid-cols-1 justify-center items-start gap-5 flex-wrap">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className=" w-full flex justify-center items-center "
            >
              <Image src={mobile} alt="" className="" />
            </div>
            <div className=" w-full">
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                className="flex flex-wrap justify-center 2xl:gap-7 gap-4  p-3 "
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-xs w-fit  xl:text-lg font-normal bg-secondary text-[#bdb9b4] border border-[#30282266] rounded-lg px-1 py-1 text-center shadowBox outline-2 -outline-offset-2 outline-white"
                  >
                    <p className="sm:px-3 px-2 py-1 border border-[#E4D9BD] border-opacity-5 rounded-md">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 py-5 w-full ">
            <DownloadBtns />
          </div>
        </div>
      </Section>
      <Image
        src={mask}
        alt=""
        className="absolute -lg:bottom-20 bottom-0 -z-10 lg:right-0"
      />
    </div>
  );
};

export default Features;
