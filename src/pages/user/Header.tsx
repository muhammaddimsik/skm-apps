import { ModeToggle } from "@/components/mode-toogle";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between p-[2rem] pb-[1rem] shadow-sm">
      <div className="text-start">
        <h2 className="font-bold text-lg">DPMPTSP</h2>
        <h2 className="text-sm text-gray-600">Survey Kepuasan Masyarakat</h2>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Header;
