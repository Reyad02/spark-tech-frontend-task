"use client";
import bool from "@/assets/bool.png";
import tomato from "@/assets/tomato.png";
import tomato1 from "@/assets/tomato_1.png";
import chili from "@/assets/chili.png";
import avatar from "@/assets/avatar.jpg";

import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

import Image from "next/image";
import { ranchoFont } from "../Hero/Hero";
import { FaStar } from "react-icons/fa";

import { Carousel } from "antd";

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto relative z-20 overflow-visible pb-20 pt-16 flex flex-col md:flex-row items-center gap-20">
      <div className="w-full px-2.5 md:px-0 md:max-w-[500px]">
        <div className="flex flex-col gap-3">
          <h1
            className={`text-xl text-[var(--blackt)] ${ranchoFont.className} text-center md:text-left`}
          >
            Restaurants
          </h1>
          <h2 className="text-4xl font-semibold text-center md:text-left">
            What{" "}
            <span className="text-[var(--orange1st)]">Customer Saying</span>{" "}
            About our Services
          </h2>

          <Carousel            
            dots={{
              className: "custom-carousel-dots",
            }}
          >
            <div className="mb-20">
              <div className="border border-[#FFCABB] p-6 rounded-lg">
                <FaQuoteLeft className="inline relative top-0 text-[var(--orange1st)] text-2xl" />
                <p className="text-[#262626] pl-6 inline-block">
                  Love the convenience of Tweet! Fast, reliable, and super easy
                  to use for all your food delivery cravings.
                  <FaQuoteRight className=" inline relative top-1 ml-1 text-[var(--orange1st)] text-2xl" />
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={avatar}
                    alt="user"
                    width={74}
                    height={74}
                    className="rounded-full object-cover object-top w-[74px] h-[74px]"
                  />
                  <div className="flex flex-col gap-[1px] flex-1">
                    <p className="text-[#010F1C] text-xl font-semibold">
                      Leon Fischer
                    </p>
                    <p className="text-[#767676] text-xs font-light">
                      Satisfied Customer
                    </p>
                  </div>
                  <div className="bg-[var(--orange1st)] rounded-sm p-2.5 flex items-center gap-0.5">
                    <FaStar className="text-white" />
                    <FaStar className="text-white" />
                    <FaStar className="text-white" />
                    <FaStar className="text-white" />
                    <FaStar className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#FFCABB] p-6 rounded-lg">
              <FaQuoteLeft className="inline relative top-0 text-[var(--orange1st)] text-2xl" />
              <p className="text-[#262626] pl-6 inline-block">
                Love the convenience of Tweet! Fast, reliable, and super easy to
                use for all your food delivery cravings.
                <FaQuoteRight className=" inline relative top-1 ml-1 text-[var(--orange1st)] text-2xl" />
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={avatar}
                  alt="user"
                  width={74}
                  height={74}
                  className="rounded-full object-cover object-top w-[74px] h-[74px]"
                />
                <div className="flex flex-col gap-[1px] flex-1">
                  <p className="text-[#010F1C] text-xl font-semibold">
                    Leon Fischer
                  </p>
                  <p className="text-[#767676] text-xs font-light">
                    Satisfied Customer
                  </p>
                </div>
                <div className="bg-[var(--orange1st)] rounded-sm p-2.5 flex items-center gap-0.5">
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                </div>
              </div>
            </div>

            <div className="border border-[#FFCABB] p-6 rounded-lg">
              <FaQuoteLeft className="inline relative top-0 text-[var(--orange1st)] text-2xl" />
              <p className="text-[#262626] pl-6 inline-block">
                Love the convenience of Tweet! Fast, reliable, and super easy to
                use for all your food delivery cravings.
                <FaQuoteRight className=" inline relative top-1 ml-1 text-[var(--orange1st)] text-2xl" />
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={avatar}
                  alt="user"
                  width={74}
                  height={74}
                  className="rounded-full object-cover object-top w-[74px] h-[74px]"
                />
                <div className="flex flex-col gap-[1px] flex-1">
                  <p className="text-[#010F1C] text-xl font-semibold">
                    Leon Fischer
                  </p>
                  <p className="text-[#767676] text-xs font-light">
                    Satisfied Customer
                  </p>
                </div>
                <div className="bg-[var(--orange1st)] rounded-sm p-2.5 flex items-center gap-0.5">
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                </div>
              </div>
            </div>

            <div className="border border-[#FFCABB] p-6 rounded-lg">
              <FaQuoteLeft className="inline relative top-0 text-[var(--orange1st)] text-2xl" />
              <p className="text-[#262626] pl-6 inline-block">
                Love the convenience of Tweet! Fast, reliable, and super easy to
                use for all your food delivery cravings.
                <FaQuoteRight className=" inline relative top-1 ml-1 text-[var(--orange1st)] text-2xl" />
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={avatar}
                  alt="user"
                  width={74}
                  height={74}
                  className="rounded-full object-cover object-top w-[74px] h-[74px]"
                />
                <div className="flex flex-col gap-[1px] flex-1">
                  <p className="text-[#010F1C] text-xl font-semibold">
                    Leon Fischer
                  </p>
                  <p className="text-[#767676] text-xs font-light">
                    Satisfied Customer
                  </p>
                </div>
                <div className="bg-[var(--orange1st)] rounded-sm p-2.5 flex items-center gap-0.5">
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                </div>
              </div>
            </div>

            <div className="border border-[#FFCABB] p-6 rounded-lg">
              <FaQuoteLeft className="inline relative top-0 text-[var(--orange1st)] text-2xl" />
              <p className="text-[#262626] pl-6 inline-block text-base">
                Love the convenience of Tweet! Fast, reliable, and super easy to
                use for all your food delivery cravings.
                <FaQuoteRight className=" inline relative top-1 ml-1 text-[var(--orange1st)] text-2xl" />
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={avatar}
                  alt="user"
                  width={74}
                  height={74}
                  className="rounded-full object-cover object-top w-[74px] h-[74px]"
                />
                <div className="flex flex-col gap-[1px] flex-1">
                  <p className="text-[#010F1C] text-xl font-semibold">
                    Leon Fischer
                  </p>
                  <p className="text-[#767676] text-xs font-light">
                    Satisfied Customer
                  </p>
                </div>
                <div className="bg-[var(--orange1st)] rounded-sm p-2.5 flex items-center gap-0.5">
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      
      <div className="relative mx-15 md:ml-32 z-0">
        <div className="w-full p-4 md:p-0 md:w-[500px] h-full md:h-[500px] rounded-full border-[3px] border-dashed flex items-center justify-center border-[#ED692333] z-0">
          <div className="relative w-full md:w-[410px] h-full md:h-[410px] rounded-full border-[3px] border-dashed border-[#ED69234D] z-0">
            <Image
              className="absolute top-6 -left-8 z-10"
              src={tomato}
              alt="tomato"
              width={211}
              height={162}
            />

            <Image
              className="relative z-20"
              src={bool}
              alt="food bool"
              width={400}
              height={400}
            />

            <Image
              className="absolute top-0 -right-8 z-30"
              src={chili}
              alt="chili"
              width={211}
              height={162}
            />
            <Image
              className="absolute -bottom-12 left-0 z-30"
              src={tomato1}
              alt="tomato"
              width={171}
              height={136}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
