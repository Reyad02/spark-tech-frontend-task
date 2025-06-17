import Image from "next/image";
import hero from "@/assets/Hero.png";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import people from "@/assets/working-people.jpg";
import truck from "@/assets/truck-fast.png";
import { Rancho } from "next/font/google";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

const ranchoFont = Rancho({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(239.29deg, rgba(253, 237, 229, 0.25) 20.27%, rgba(254, 140, 79, 0.1) 50%, rgba(254, 140, 79, 0.25) 78.71%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center pb-28 pt-10">
        <div className="w-1/2 pr-6 flex flex-col gap-6">
          <h1
            className={`text-8xl ${ranchoFont.className} text-[var(--orange1st)]`}
          >
            Hungry?
          </h1>
          <h2 className="font-bold text-7xl">
            Let Us{" "}
            <span className="text-[var(--orange1st)]">
              Bring The Feast to You
            </span>
          </h2>
          <p className="text-lg text-[var(--blackt)]">
            Explore hundreds of delicious options from top restaurants and enjoy
            fast, reliable delivery right to you.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Email"
              className="border w-full border-[var(--orange1st)] py-4 pl-6 rounded-bl-xl rounded-tl-xl rounded-br-xl rounded-tr-xl text-[#6C757D] text-sm bg-white"
            />
            <div className="hover:cursor-pointer absolute inset-y-0 right-1/4 rounded-br-xl rounded-tr-xl  p-4 flex gap-1 items-center">
              <FaLocationCrosshairs />
              <span className=" text-sm text-[var(--orange1st)]">
                Locate me
              </span>
            </div>
            <div className="hover:cursor-pointer absolute inset-y-0 right-0 rounded-br-xl rounded-tr-xl bg-[var(--orange1st)] px-8 py-3">
              <span className="text-white text-xl font-semibold">
                Find Food
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-[533px] relative ">
          <Image
            className="rounded-[66px] w-full h-full object-cover"
            src={hero}
            alt="Hero Image"
          />
          <div className="absolute top-0 backdrop-blur-xl border border-[#FFFFFFA6] bg-[#FFFFFFCC] py-3 px-4 rounded-xl flex flex-col gap-2.5 left-4 drop-shadow-2xl">
            <div className="flex -space-x-6 mb-4">
              <Image
                alt="avatar-1"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
                height={48}
                src={avatar1}
                width={48}
              />
              <Image
                alt="avatar-2"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
                height={48}
                src={avatar2}
                width={48}
              />
              <Image
                alt="avatar-3"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
                height={48}
                src={avatar3}
                width={48}
              />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#FAFAFA] flex items-center justify-center cursor-pointer text-lg text-[#0A0202]">
                <GoPlus className="text-2xl font-light" />
              </div>
            </div>
            <p className="font-semibold text-[var(--blackt)]">
              Satisfied Customer
            </p>
            <div className="flex gap-2 items-center">
              <FaStar className="text-[var(--alerts)]" />
              <p className="text-[var(--blackt)]">5.0 (3K Reviews)</p>
            </div>
          </div>

          <div className="absolute -bottom-16 rounded-xl backdrop-blur-xl bg-[#FFFFFF80] border border-[#FFFFFFA6] p-4 flex items-center gap-2.5 drop-shadow-2xl">
            <Image
              alt="Cozy cafe interior with people sitting at tables, orange hanging lamps, and large windows showing trees outside"
              className="w-28 h-28 rounded-xl object-cover "
              height={112}
              src={people}
              width={112}
            />
            <div className="flex flex-col gap-1.5 ">
              <p className="font-semibold">Flavor Fusion Bistro</p>
              <p className="text-xs">Kaliurang, Seleman</p>
              <div className="flex gap-1.5">
                4.9 <FaStar className="text-[var(--alerts)]" />
              </div>
            </div>
            <div className="absolute bottom-6 right-4 p-1 border border-[#1716211F] rounded-full cursor-pointer">
              <CiHeart className="text-[#262626] text-lg font-semibold" />
            </div>
          </div>

          <div className="absolute -bottom-4 right-0 backdrop-blur-lg border border-[#FFFFFFA6] bg-[#FFFFFFCC] py-3 px-4 rounded-xl flex items-center gap-4 drop-shadow-xl ">
            <Image
              alt="Cozy cafe interior with people sitting at tables, orange hanging lamps, and large windows showing trees outside"
              className="w-7 h-7 rounded-xl object-cover "
              height={24}
              src={truck}
              width={24}
            />
            <div className="flex flex-col gap-1">
              <p className="text-[#0D062D] font-semibold">24/7</p>
              <p className="text-[#737373] text-sm">Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
