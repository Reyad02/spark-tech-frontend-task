"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import FoodCard from "./FoodCard";

type CategoryItem = {
  name: string;
  img: any;
};

const FoodSlider = ({ items }: { items: CategoryItem[] }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesPerView = 4;

  return (
    <div className="relative ">
      <button
        ref={prevRef}
        disabled={activeIndex === 0}
        className={`absolute top-1/2 -translate-y-1/2 -left-16 z-10 bg-white drop-shadow-2xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-opacity
    ${activeIndex === 0 ? "opacity-60 cursor-not-allowed" : ""}
  `}
      >
        <FiArrowLeft
          className={`${
            activeIndex === 0 ? "text-gray-900" : "text-black"
          } text-xl`}
        />
      </button>

      <button
        ref={nextRef}
        disabled={activeIndex >= items.length - slidesPerView}
        className={`absolute top-1/2 -translate-y-1/2 -right-12 z-10 bg-white drop-shadow-2xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-opacity
    ${
      activeIndex >= items.length - slidesPerView
        ? "opacity-60 cursor-not-allowed"
        : ""
    }
  `}
      >
        <FiArrowRight
          className={`${
            activeIndex >= items.length - slidesPerView
              ? "text-gray-800"
              : "text-black"
          } text-xl`}
        />
      </button>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const nav = swiper.params.navigation as any;
          nav.prevEl = prevRef.current;
          nav.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <FoodCard name={item.name} img={item.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FoodSlider;
