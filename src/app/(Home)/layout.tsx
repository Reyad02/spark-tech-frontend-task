import Navbar from "@/components/Navbar";
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
