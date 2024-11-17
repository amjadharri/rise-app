import React from "react";
import { BsQrCode } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";
import { GiDiamondRing } from "react-icons/gi";

const UpgradeableSkills = () => {
  const buttons = [
    {
      id: "skills",
      label: "Skills",
      Icon: BsQrCode,
    },
    {
      id: "strengths",
      label: "Strengths",
      Icon: BsFillLightningFill,
    },
    {
      id: "talents",
      label: "Talents",
      Icon: GiDiamondRing,
    },
  ];

  return (
    <div className="px-4 md:px-6">
      <div
        className="px-6 py-2 text-gradient text-sm md:text-base mb-4 font-semibold tracking-wider text-center text-nowrap border-b-[1px] border-t-[1px] border-[#E4D9BD] border-opacity-10"
        style={{
          background: `
            radial-gradient(circle, #211c18, #140f09), 
            linear-gradient(to bottom, #7d4e22, #d19340)
          `,
        }}
      >
        <div className="relative flex gap-1 text-sm md:text-base text-left md:text-center text-gradient font-bold uppercase z-10 user-select-none text-nowrap">
          Upgradeable <span className="hidden md:block"> In Game</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:gap-4 px-4 md:px-8">
        {buttons.map(({ id, label, Icon }) => (
          <button
            key={id}
            style={{
              background: `
                    linear-gradient(to right, rgba(255,255,255,0.1), #211c18),
                  `,
            }}
            className={`upgradeable-skills relative flex items-center gap-2 md:gap-3 px-2 py-1 md:px-3 md:py-2 w-full rounded-l-full transition-all duration-200 group border-b-[1px] border-t-[1px] border-[#E4D9BD] border-opacity-10 user-select-none`}
          >
            <div
              className={`absolute left-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full transition-all duration-200 shadow-lg`}
              style={{
                background: `
      radial-gradient(circle at 30% 30%, #a1692b, #954d03, #633a1d),
      linear-gradient(to bottom, #7d4e22, #d19340)
    `,
                boxShadow: `
      inset 2px 2px 4px rgba(0, 0, 0, 0.3), 
      3px 3px 5px rgba(0, 0, 0, 0.4), 
      -1px -1px 6px rgba(255, 255, 255, 0.1)
    `,
                border: "2px solid rgba(149, 77, 3, 0.6)",
              }}
            >
              <Icon
                size={20}
                className={`text-[#ffe8a2] transition-colors duration-200 md:text-[#ffe8a2] md:size-26`}
              />
            </div>

            <span
              className={`text-sm md:text-lg font-medium tracking-wide ml-10 md:ml-12 text-[#d3c8bd] transition-colors duration-200`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UpgradeableSkills;
