import Image from "next/image";
import footerImg from "@/assets/logo.png";

import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-white pt-12 pb-8">

      <div className="flex pb-18 justify-between max-w-7xl mx-auto ">
        <div className="w-[270px] flex flex-col gap-6">
          <Image src={footerImg} alt="Footer Image" width={102} height={56} />
          <p className="text-[#A5A5A5]">
            Your go-to choice for fast and fresh delivery, bringing the best to
            your door in no time
          </p>
          <div className="flex gap-2 items-center">
            <div className="bg-[#1C2125] hover:bg-[var(--orange1st)] rounded-full border p-3 text-sm border-[#1C2125] hover:cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-[#1C2125] hover:bg-[var(--orange1st)] rounded-full border p-3 text-sm border-[#1C2125] hover:cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-[#1C2125] hover:bg-[var(--orange1st)] rounded-full border p-3 text-sm border-[#1C2125] hover:cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="bg-[#1C2125] hover:bg-[var(--orange1st)] rounded-full border p-3 text-sm border-[#1C2125] hover:cursor-pointer">
              <FaWhatsapp />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-2xl">Quick Links</p>
          <div className="flex flex-col gap-2.5 text-[#A5A5A5]">
            <p>About Us</p>
            <p>How We works</p>
            <p>Career</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-2xl">Quick Links</p>
          <div className="flex flex-col gap-2.5 text-[#A5A5A5]">
            <p>Privacy Policies</p>
            <p>Terms & Conditions</p>
            <p>Faq</p>
          </div>
        </div>

        <div className="w-80 flex flex-col gap-3">
          <p className="text-2xl">Newsletter</p>
          <div className="flex flex-col gap-3.5 text-[#A5A5A5]">
            <p>Subscribe Our newsletter to get our Latest Update & News</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Email"
                className="border w-full border-[#181D21] py-4 pl-6 rounded-bl-sm rounded-tl-sm bg-[#181D21] max-w-[460px] "
              />
              <div className="hover:cursor-pointer absolute inset-y-0 right-0 rounded-br-sm rounded-tr-sm bg-[var(--orange1st)] p-5">
                <FaTelegramPlane className="text-base text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-[#5C5C5C]" />

      <p className="text-center mt-8 text-[#A5A5A5]">© 2024 Tweet. All Rights Reserved</p>
      
    </div>
  );
};

export default Footer;
