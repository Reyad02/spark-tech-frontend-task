import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const profilePage = () => {
  return (
    <>
      <div className="p-6 flex flex-col gap-6 bg-white border-[#E6E6E6] border-2 rounded-xl">
        <h1 className="text-[#1A1A1A] text-2xl font-medium">Profile</h1>
        <div className="py-6 px-5 border-2 border-[#A1A1A1] border-dashed rounded-xl">
          <div className="flex gap-2 items-center">
            <IoPersonSharp className="text-[var(--orange1st)]" />
            <p className="text-[#3D3D3D] font-medium">Name:</p>
          </div>
          <p className="text-[#747474] ml-6">Mark Jecno</p>
        </div>

        <div className="py-6 px-5 border-2 border-[#A1A1A1] border-dashed rounded-xl">
          <div className="flex gap-2 items-center">
            <MdEmail className="text-[var(--orange1st)]" />
            <p className="text-[#3D3D3D] font-medium">Email:</p>
          </div>
          <p className="text-[#747474] ml-6">mark-jecno@gmail.com</p>
        </div>

        <div className="py-6 px-5 border-2 border-[#A1A1A1] border-dashed rounded-xl">
          <div className="flex gap-2 items-center">
            <FaLock className="text-[var(--orange1st)]" />
            <p className="text-[#3D3D3D] font-medium">Address:</p>
          </div>
          <p className="text-[#747474] ml-6">
            93, Songbird Cir, Blackville, South Carolina, USA-29817
          </p>
        </div>
      </div>

      <div className="flex mt-4 mb-8 justify-end ">
        <button className="bg-[var(--orange1st)] text-white cursor-pointer py-3 px-12 rounded-xl hover:shadow-2xl">
          Update
        </button>
      </div>

      <div className="p-6 flex flex-col gap-6 bg-white border-[#E6E6E6] border-2 rounded-xl">
        <h1 className="text-[#1A1A1A] text-2xl font-medium">Change Password</h1>
        <div className="py-6 px-5 border-2 border-[#A1A1A1] border-dashed rounded-xl">
          <div className="flex gap-2 items-center">
            <FaLock className="text-[var(--orange1st)]" />
            <p className="text-[#3D3D3D] font-medium">Current Password:</p>
          </div>
          <p className="text-[#747474] ml-6">********</p>
        </div>

        <div className="py-6 px-5 border-2 border-[#A1A1A1] border-dashed rounded-xl">
          <div className="flex gap-2 items-center">
            <FaLock className="text-[var(--orange1st)]" />
            <p className="text-[#3D3D3D] font-medium">New Password:</p>
          </div>
          <p className="text-[#747474] ml-6">********</p>
        </div>

        <div className="py-6 px-5 border-2 border-[#A1A1A1] border-dashed rounded-xl">
          <div className="flex gap-2 items-center">
            <FaLock className="text-[var(--orange1st)]" />
            <p className="text-[#3D3D3D] font-medium">Confirm Password:</p>
          </div>
          <p className="text-[#747474] ml-6">********</p>
        </div>
      </div>

      <div className="flex mt-4 justify-end ">
        <button className="bg-[var(--orange1st)] text-white cursor-pointer py-3 px-12 rounded-xl hover:shadow-2xl">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default profilePage;
