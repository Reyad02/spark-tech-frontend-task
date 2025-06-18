import CategorySlider from "@/components/module/Category/CategorySlider";
import Hero, { ranchoFont } from "@/components/module/Hero/Hero";
import SectionTitle from "@/components/Shared/SectionTitle";

import iphone from "@/assets/iphone.png";
import play_store from "@/assets/play-store.png";
import app_store from "@/assets/app_store (1).png";
import rectangle from "@/assets/Rectangle 8769.png";

import FoodSlider from "@/components/module/Food/FoodSlider";
import ResturentSlider from "@/components/module/Restaurent/ResaurentSlider";
import Image from "next/image";

import { categories, foods, restaurents } from "@/constants";
import Testimonial from "@/components/module/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Hero />

      <SectionTitle title="Category" subtitle="Category" />
      <div className="max-w-7xl mx-auto relative z-20 overflow-visible pb-20">
        <CategorySlider items={categories} />
      </div>

      <SectionTitle title="Popular Food" subtitle="Food Near me" />
      <div className="max-w-7xl mx-auto relative z-20 overflow-visible pb-20">
        <FoodSlider items={foods} />
      </div>

      <SectionTitle title="Popular Food" subtitle="Restaurent Near me" />
      <div className="max-w-7xl mx-auto relative z-20 overflow-visible pb-20">
        <ResturentSlider items={restaurents} />
      </div>

      <div className="max-w-7xl mx-auto relative z-20 overflow-visible pb-20 px-2.5 md:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-16 relative">
          <div className="max-w-3xl">
            <div className="flex flex-col gap-3">
              <h1
                className={`text-xl text-[var(--blackt)] ${ranchoFont.className} text-center md:text-left`}
              >
                Restaurants
              </h1>
              <h2 className="text-4xl font-semibold text-center md:text-left">
                Enhance your experience, <br />
                <span className="text-[var(--orange1st)]">
                  Download the Tweet app today!
                </span>
              </h2>
              <p className="text-[#5C5C5C] mt-3 text-center md:text-left">
                Discover a whole new level of convenience with our mobile app.
                From browsing our delectable menu to securing exclusive deals,
                it&apos;s your gateway to a world of culinary delights. Download
                now and elevate your dining experience with just a tap.
              </p>
              <div className="flex items-center gap-3 mt-3">
                <Image
                  src={play_store}
                  alt="play-store"
                  height={48}
                  width={148}
                  className="cursor-pointer"
                />
                <Image
                  src={app_store}
                  alt="app store"
                  height={48}
                  width={148}
                  className="cursor-pointer "
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-md md:max-w-lg relative h-[400px] sm:h-[500px] lg:h-[600px] mx-auto ">
            {/* <div className="flex-1 relative h-[600px] w-full"> */}
            <Image
              src={iphone}
              alt="Iphone Image"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute -bottom-20 md:bottom-0 w-full h-[255px] -z-40">
            <Image src={rectangle} alt="rectangle" fill />
            <div className="z-10 relative h-full flex items-center justify-left">
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-6 text-white text-center px-2 md:px-8 mt-20 md:mt-16">
                <div>
                  <p className="text-xl md:text-4xl font-bold">100+</p>
                  <p className="text-xs md:text-lg">Food Menu</p>
                </div>
                <div>
                  <p className="text-xl md:text-4xl font-bold">100+</p>
                  <p className="text-xs md:text-lg">Downloads</p>
                </div>
                <div>
                  <p className="text-xl md:text-4xl font-bold">20+</p>
                  <p className="text-xs md:text-lg">Positive reviews</p>
                </div>
                <div>
                  <p className="text-xl md:text-4xl font-bold">4.7</p>
                  <p className="text-xs md:text-lg">Average Review</p>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <Testimonial />
    </div>
  );
}
