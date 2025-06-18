import logo from "@/assets/logo.png";
import navImg from "@/assets/navImage.jpg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <p className="text-base text-white bg-[var(--orange1st)] h-12 flex justify-center items-center">
        {" "}
        Free Delivery on Your First Order – Order Now!
      </p>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex justify-between py-3">
          <Image src={logo} alt="Logo" width={102} height={56} />

          <div className="w-14 h-14 relative rounded-full border-2 border-[#F1874F] overflow-hidden">
            <Link href={"/profile"}>
              {" "}
              <Image
                src={navImg}
                alt="Logo"
                fill
                className="object-cover object-center"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
