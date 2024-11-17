"use client";

import Link from "next/link";
import React, { useState } from "react";
import FormButton from "../form-button";
import CustomInput from "../custom-input";
import Image from "next/image";
import CustomProgressBar from "../custom-progress-bar";
import CountdownTimer from "../countdown-timer";
import { Info } from "@/app/svg";

const HeroForm = () => {
  const handleTimerComplete = (): void => {
    console.log("Timer completed!");
  };

  const containerShadowStyle = {
    filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6))",
  };

  const [payWithValue, setPayWithValue] = useState<string>("");
  const [receiveValue, setReceiveValue] = useState<string>("");

  const [selectedCurrency, setSelectedCurrency] = useState<string>("ETH");

  const getPayWithLabel = () => `Pay with ${selectedCurrency}`;

  return (
    <div className="w-full h-full px-14 sm:px-16 xl:px-16 2xl:px-20 flex flex-col justify-start items-center">
      <div className="w-full max-w-xl ">
        <h1
          className="text-gradient text-shadow-gradient 2xl:text-3xl text-2xl font-semibold pt-10 lg:pt-5 pb-2 2xl:py-8 relative text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]"
          style={containerShadowStyle}
        >
          Buy $Rise presale
        </h1>
        <CountdownTimer
          initialMinutes={2880}
          onComplete={handleTimerComplete}
        />
        <p
          className="text-center text-gradient font-semibold text-lg mt-1 "
          style={containerShadowStyle}
        >
          Until Next price increase
        </p>
        <div className="w-full flex justify-center gap-10 my-3">
          <p
            className="text-lg text-gradient font-semibold"
            style={containerShadowStyle}
          >
            $14.934.093.29
          </p>
          <p
            className="text-lg text-gradient font-semibold opacity-80"
            style={containerShadowStyle}
          >
            $14.934.093.29
          </p>
        </div>
        <div>
          <CustomProgressBar progress={80} />
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center my-3">
          <p
            className="flex items-center text-gradient font-semibold text-sm lg:text-md xxl:text-lg uppercase"
            style={containerShadowStyle}
          >
            <span>Your Purchased $Rise</span> <span className="mx-1">=</span>{" "}
            <span>0</span>
            <span className="ml-2 text-[#e6c790] relative">
              <Info />
            </span>
          </p>
          <p
            className="flex items-center text-gradient font-semibold text-sm lg:text-md xxl:text-lg"
            style={containerShadowStyle}
          >
            <span>Your Stakeable $Rise</span> <span className="mx-1">=</span>{" "}
            <span>0</span>
            <span className="ml-2 text-[#e6c790]">
              <Info />
            </span>
          </p>
        </div>
        <div className="z-50 w-full flex justify-center gap-2 my-3">
          <Image
            src={"/assets/form-arrow-left.svg"}
            alt="arrow"
            width={70}
            height={70}
            className="z-50"
          />
          <p className="text-gradient font-semibold text-[10px] sm:text-sm z-50">
            1$RISE <span className="mx-1">=</span> $0.3490
          </p>
          <Image
            src={"/assets/form-arrow-right.svg"}
            alt="arrow"
            width={70}
            height={70}
            className="z-50"
          />
        </div>
        <div className="w-full flex justify-evenly items-center my-3 z-50">
          {["ETH", "SOL", "USDT", "CARD"].map((currency) => (
            <PointBox
              key={currency}
              label={currency}
              isActive={
                selectedCurrency === (currency === "CARD" ? "USD" : currency)
              }
              onClick={() =>
                setSelectedCurrency(currency === "CARD" ? "USD" : currency)
              }
            />
          ))}
        </div>
        <form>
          <div className="w-full">
            <CustomInput
              label={getPayWithLabel()}
              value={payWithValue}
              onChange={setPayWithValue}
              onMaxClick={() => setPayWithValue("100")}
            />
            <CustomInput
              label="$Rise you receive"
              value={receiveValue}
              onChange={setReceiveValue}
              disabled
            />
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <FormButton label="Explore Edition" />
            <FormButton
              label="Buy"
              radialColor1="#4b3d28"
              radialColor2="#211811"
            />
          </div>
        </form>

        <div className="flex  lg:flex-row  lg:justify-between justify-center flex-col items-center my-3 text-xs 2xl:text-sm text-gradient font-semibold uppercase z-50">
          <Link href={"#"} className="text-gradient z-50">
            Connect Wallet
          </Link>
          <Link
            href={"#"}
            className="text-gradient border-b-2 border-[#E4D9BD] border-opacity-30 z-50 "
          >
            Don&apos;t Have a Wallet
          </Link>
        </div>
        <div>
          <Link
            href={"https://solidlaunch.io/"}
            target="_blank"
            className="flex justify-center items-center my-5 pb-20 xl:pb-0 text-sm lg:text-md text-gradient font-semibold uppercase"
            style={containerShadowStyle}
          >
            Powered by SolidLauch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;

interface PointBoxProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const PointBox = ({ label, isActive, onClick }: PointBoxProps) => {
  return (
    <div
      className={`z-50 xl:px-4 px-3 py-2 uppercase cursor-pointer border-[#EED199] border-opacity-50 border-[1.5px]`}
      style={{
        background: isActive
          ? `
            radial-gradient(circle, #835e3b, #371708), 
            linear-gradient(to bottom, #7d4e22, #d19340)
          `
          : `
            radial-gradient(circle, #230203, #430109), 
            linear-gradient(to bottom, #7d4e22, #d19340)
          `,
      }}
      onClick={onClick}
    >
      <p className="text-gradient text-sm lg:text-md font-semibold">{label}</p>
    </div>
  );
};
