import Navbar from "@/components/Shared/Navbar";
import { ReactNode } from "react";

const homeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default homeLayout;
