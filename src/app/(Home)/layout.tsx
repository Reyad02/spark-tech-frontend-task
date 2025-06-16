import { ReactNode } from "react";

const homeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="h-20 w-full bg-red-500">Navbar</div>
      {children}
    </div>
  );
};

export default homeLayout;
