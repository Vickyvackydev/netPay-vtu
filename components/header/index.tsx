"use client";
import { selectUser } from "@/states/slices/authReducer";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector(selectUser);
  return (
    <div className="flex items-center justify-end py-2 w-full px-3">
      <div className="flex items-center gap-x-3 ">
        <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-default">
          <span className="text-lg font-medium text-defaultBlack">VV</span>
        </div>
        <span className="text-[16px] text-defaultBlack">{user?.full_name}</span>
        <FaChevronDown color="#4b5563" size={15} />
      </div>
    </div>
  );
}

export default Header;
