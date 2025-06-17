import CategorySlider from "@/components/CategorySlider";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import pizza from "@/assets/pizza.png";
import donuts from "@/assets/donuts.png";
import kebab from "@/assets/kebab.png";
import burger from "@/assets/burger.png";
import snadwich from "@/assets/sandwich.png";
import shawrma from "@/assets/shawrma.png";
import taco from "@/assets/taco.png";

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

export default function Home() {
  return (
    <div className="">
      <Hero />

      <SectionTitle title="Category" subtitle="Category" />
      <div className="max-w-7xl mx-auto relative z-20 overflow-visible pb-20">
        <CategorySlider items={categories} />
      </div>
    </div>
  );
}
