import Image from "next/image";
import profile from "@/assets/profile.png";
import frame from "@/assets/Frame.svg";
import { CgProfile } from "react-icons/cg";
import { IoMdExit } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

const Aside = () => {
  return (
    <div className="h-full bg-white rounded-lg">
      <div
        style={{
          background:
            "linear-gradient(303.11deg, #FF8D2F 17.41%, #FFD3B0 122.63%)",
        }}
        className="h-[160px] min-w-[282px] relative rounded-t-lg"
      >
        <Image
          src={profile}
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full absolute -bottom-12 left-1/2 -translate-x-1/2 "
        />
      </div>

      <div className="mt-20 flex flex-col justify-center items-center">
        <p className="text-lg text-[#3D3D3D] font-medium">Mark Jecno</p>
        <p className="text-[#747474] text-sm">mark-jecno@gmail.com</p>
      </div>

      <div className="mt-10 flex flex-col justify-center items-start ml-10 gap-4 text-[var(--blackt)]">
        <div className="flex items-center gap-1.5 text-[#F1874F] font-medium">
          {" "}
          <CgProfile />
          Profile
        </div>
        <div className="flex items-center gap-1.5 ">
          <FiShoppingBag />
          Order
        </div>
        <div className="flex items-center gap-1.5 ">
          {" "}
          <Image src={frame} alt="notation" width={16} height={16} /> StampCard
        </div>
        <div className="flex items-center gap-1.5 ">
          {" "}
          <IoMdHelpCircleOutline />
          Help
        </div>
        <div className="flex items-center gap-1.5 ">
          {" "}
          <IoSettingsOutline />
          Setting
        </div>
        <div className="flex items-center gap-1.5 ">
          {" "}
          <IoMdExit />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Aside;
