import { ReactNode } from "react";

const profileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex ">
      <div className="h-screen bg-red-500">
        <p>Profile Layout</p>
      </div>
      {children}
    </div>
  );
};

export default profileLayout;
