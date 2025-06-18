import Aside from "@/components/Shared/Aside";
import { ReactNode } from "react";

const profileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex max-w-7xl mx-auto mt-10">
      <div className="sticky mb-10 drop-shadow-sm">
        <Aside />
      </div>
      <div className="max-w-4xl mx-auto border border-red-400 w-full">
        {children}
      </div>
    </div>
  );
};

export default profileLayout;
