import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  return (
    <div className="flex items-center justify-end py-2 w-full">
      <div className="flex items-end gap-x-3 ">
        <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center border border-default">
          <span className="text-2xl font-medium text-defaultBlack">VV</span>
        </div>
        <span>Victor Developer</span>
        <FaChevronDown />
      </div>
    </div>
  );
}

export default Header;
