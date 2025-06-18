import Image from "next/image";

const Category = ({
  img,
  color,
  name,
}: {
  img: string;
  color: string;
  name: string;
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-xl p-6 w-32 h-24 pt-20 shadow-md`}
      style={{ backgroundColor: color }}
    >
      <div className="w-28 h-24 absolute -top-8 z-50">
        <Image src={img} alt={name} fill className="object-contain" />
      </div>
      <p className=" text-white font-semibold text-lg ">{name}</p>
    </div>
  );
};

export default Category;
