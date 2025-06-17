import CategorySlider from "@/components/module/Category/CategorySlider";
import Hero, { ranchoFont } from "@/components/module/Hero/Hero";
import SectionTitle from "@/components/Shared/SectionTitle";

import pizza from "@/assets/pizza.png";
import donuts from "@/assets/donuts.png";
import kebab from "@/assets/kebab.png";
import burger from "@/assets/burger.png";
import snadwich from "@/assets/sandwich.png";
import shawrma from "@/assets/shawrma.png";
import taco from "@/assets/taco.png";

import burger_1 from "@/assets/burger-1.jpg";
import chicken from "@/assets/chicken.jpg";
import deoner_kabab from "@/assets/doner_kabab.jpg";
import pizza_1 from "@/assets/pizza_1.jpg";

import burger_king from "@/assets/burger_king.jpg";
import vina from "@/assets/vina.jpg";
import aplen from "@/assets/aplenflair.jpg";
import mozart from "@/assets/mozart's.jpg";

import iphone from "@/assets/iphone.png";
import play_store from "@/assets/play-store.png";
import app_store from "@/assets/app_store (1).png";
import rectangle from "@/assets/Rectangle 8769.png";

import FoodSlider from "@/components/module/Food/FoodSlider";
import ResturentSlider from "@/components/module/Restaurent/ResaurentSlider";
import Image from "next/image";

const categories = [
  { name: "Donuts", color: "#E1B47B", img: donuts },
  { name: "Pizza", color: "#FA8D1C", img: pizza },
  { name: "Kebab", color: "#FD683E", img: kebab },
  { name: "Burger", color: "#FF8000", img: burger },
  { name: "Sandwich", color: "#F75E28", img: snadwich },
  { name: "Shawarma", color: "#FCBD00", img: shawrma },
  { name: "Taco", color: "#DA270F", img: taco },
  { name: "Taco", color: "#DA270F", img: taco },
  { name: "Taco", color: "#DA270F", img: taco },
];

const foods = [
  { name: "Burger with Emmental Cheese", img: burger_1 },
  { name: "Tandoori Chicken", img: chicken },
  { name: "Döner Kebab", img: deoner_kabab },
  { name: "Pepperoni Pizza Slice", img: pizza_1 },
  { name: "Pepperoni Pizza Slice", img: pizza_1 },
];

const restaurents = [
  { name: "Burger King", img: burger_king },
  { name: "Vienna's Delight", img: vina },
  { name: "AlpenFlair Bistro", img: aplen },
  { name: "Mozart's Table", img: mozart },
  { name: "Burger King", img: burger_king },
];

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

      <div className="max-w-7xl mx-auto relative z-20 overflow-visible pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-16 relative">
          <div className="max-w-3xl">
            <div className="flex flex-col gap-3">
              <h1
                className={`text-xl text-[var(--blackt)] ${ranchoFont.className}`}
              >
                Restaurants
              </h1>
              <h2 className="text-4xl font-semibold ">
                Enhance your experience,{" "}
                <br />
                <span className="text-[var(--orange1st)]">
                  Download the Tweet app today!
                </span>
              </h2>
              <p className="text-[#5C5C5C] mt-3">
                Discover a whole new level of convenience with our mobile app.
                From browsing our delectable menu to securing exclusive deals,
                it&apos;s your gateway to a world of culinary delights. Download now
                and elevate your dining experience with just a tap.
              </p>
              <div className="flex items-center gap-3  mt-3">
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

          <div className="flex-1 relative h-[600px] w-full">
            <Image
              src={iphone}
              alt="Iphone Image"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 w-full h-[255px] -z-40">
            <Image src={rectangle} alt="rectangle" fill />
            <div className="z-10 relative h-full flex items-center justify-left">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-center px-8 mt-16">
                <div>
                  <p className="text-4xl font-bold">100+</p>
                  <p className="text-lg">Food Menu</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">100+</p>
                  <p className="text-lg">Downloads</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">20+</p>
                  <p className="text-lg">Positive reviews</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">4.7</p>
                  <p className="text-lg">Average Review</p>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
