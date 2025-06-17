import CategorySlider from "@/components/module/Category/CategorySlider";
import Hero from "@/components/module/Hero/Hero";
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

import FoodSlider from "@/components/module/Food/FoodSlider";

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
    </div>
  );
}
