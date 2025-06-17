import Image from "next/image";
import notation from "@/assets/notation.png";
import rest from "@/assets/restaurant-store_svgrepo.com.svg";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdBicycle } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const FoodCard = ({ img, name }:{
  img: string;
  name: string;
}) => {
  return (
    <div className="w-72 pb-5 drop-shadow-lg">
      <div className="relative w-full h-[175px]">
        <Image
          src={img}
          alt="burger image"
         fill
          className="object-cover rounded-t-xl"
        />
        <div className="absolute rounded-full px-1.5 py-2 top-5 right-5  h-8 bg-white">
          <FaHeart className="text-[var(--orange1st)] text-lg" />
        </div>

        <div className="absolute gap-1 pl-1 pr-2 flex items-center rounded-r-full w-fit py-1.5 top-5 left-0  h-8 text-white bg-[var(--orange1st)]">
          <Image src={notation} alt="notation" width={20} height={20} />
          <p className="text-xs">30% Off </p>
        </div>

        <div className="absolute gap-1 px-2 flex items-center rounded-full w-fit py-1.5 bottom-5 right-5  h-8 text-white bg-white">
          <FaStar className="text-[var(--orange1st)] " />{" "}
          <p className="text-xs text-[#333333]">4.6</p>
          <p className="text-xs text-[#707070]">(85)</p>
        </div>
      </div>

      <div className="p-4 bg-white h-[140px] flex flex-col gap-1 rounded-b-xl">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">{name}</p>
          <div>
            <p className="text-[#767676] text-xs">€ 49.99</p>
            <p className="font-semibold text-[var(--orange1st)]">€44.99</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <Image src={rest} alt="resurant" width={16} height={16} />
          <p>Burger King</p>
        </div>

        <div className="flex justify-between ">
          <div className="flex gap-6 items-center">
            <div className="text-xs text-[#5C5C5C] flex items-center gap-1">
              <IoTimeOutline />
              <p>30 min</p>
            </div>
            <div className="text-xs text-[#5C5C5C] flex items-center gap-1">
              <IoMdBicycle className="text-sm" />
              <p>$02</p>
            </div>
          </div>
          <div className="w-7 h-7 bg-[var(--orange1st)] py-1.5 px-1.5 rounded-full cursor-pointer">
            <FaPlus className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
