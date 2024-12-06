"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./how-to-buy.css";
import TitleHeading from "../common/title-heading";
import Card from "./card";

export default function HowToBuy() {
  const slides = [
    {
      title: "Connect wallet",
      description:
        "Install a Defi wallet such as Metamask, Best Wallet, Trust Wallet for ETH purchase or Phantom wallet if you wish to buy with Solana. Connect it to our secure presale widget to buy and track your $RISE token holdings.",
      subtitle: "1",
    },
    {
      title: "Have ETH, USDT or SOL",
      description:
        "To purchase $RISE tokens you need to have Ethereum (ETH), Tether ERC-20 (USDT) or Solana (SOL) on your wallet. Deposit crypto to your wallet or purchase crypto directly in your wallet.",
      subtitle: "2",
    },
    {
      title: "Swap",
      description:
        "Now you can swap your ETH, USDT or SOL for $RISE tokens. Select how much you would like to spend and you will see how many tokens you will receive. Make sure you leave a little ETH or SOL for gas fees (network transaction fee).",
      subtitle: "3",
    },
    {
      title: "Track and Claim",
      description:
        "After you successfully purchase $RISE tokens, you will be able to track how many tokens your wallet has when connected to the presale widget. Staking will be available shortly after presale launch. You will be able to stake your tokens for additional rewards or simply hold them until the presale is concluded and you will be able to claim your tokens.",
      subtitle: "4",
    },
  ];

  return (
    <div className="carousel-container pt-20 lg:pb-48 pb-28 px-4 sm:px-0">
      <TitleHeading>HOW TO BUY</TitleHeading>

      <div className="w-full flex justify-center items-center relative mt-5 lg:mt-0">
        <div className="swiper-button-prev" id="prevButton"></div>
        <div className="swiper-button-next" id="nextButton"></div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: "#prevButton",
            nextEl: "#nextButton",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 200,
            },
            1025: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Card
                title={slide.title}
                description={slide.description}
                subtitle={slide.subtitle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
