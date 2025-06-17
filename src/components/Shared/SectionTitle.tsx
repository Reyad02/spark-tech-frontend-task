import { ranchoFont } from "@/components/module/Hero/Hero";

const SectionTitle = ({
  title,
  subtitle,
  showBtn = false,
}: {
  title: string;
  subtitle: string;
  showBtn?: boolean;
}) => {
  return (
    <div className="py-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-3">
        <h1 className={`text-xl text-[var(--blackt)] ${ranchoFont.className}`}>
          {title}
        </h1>
        <div className="flex justify-between">
          <h2 className="text-4xl font-semibold">
            Popular <span className="text-[var(--orange1st)]">{subtitle}</span>
          </h2>
          {showBtn && (
            <div>
              <button className="text-xl font-semibold py-2 px-8 border border-[var(--orange1st)] text-[var(--orange1st)] rounded-lg ">
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
