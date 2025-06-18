import Aside from "@/components/Shared/Aside";
import { ReactNode } from "react";

const profileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex max-w-7xl mx-auto mt-10 items-stretch gap-6">
      <div className="w-[282px]">
        <Aside />
      </div>

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default profileLayout;
