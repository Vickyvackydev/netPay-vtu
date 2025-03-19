"use client";
import TableComponent from "@/components/table";
import { TRANSACTION_COLUMN } from "@/components/table/columns";
import { data } from "@/constants";
import DashboardLayout from "@/layouts/DashboardLayout";
import Image from "next/image";
import React, { useMemo } from "react";
import { FaEye, FaMoneyBill, FaPlane, FaUser, FaWallet } from "react-icons/fa";
import { FaMoneyBillTransfer, FaTicket } from "react-icons/fa6";

import { MdPayments, MdSimCard } from "react-icons/md";

const shortcuts = [
  {
    label: "Add Money",
    icon: <FaWallet size={20} />,
  },
  {
    label: "Transfer",
    icon: <FaMoneyBillTransfer size={20} />,
  },
  {
    label: "Airtime",
    icon: <MdSimCard size={20} />,
  },
  {
    label: "Bundle",
    icon: <MdPayments size={20} />,
  },
  {
    label: "Flights",
    icon: <FaPlane size={20} />,
  },
  {
    label: "Bills",
    icon: <FaMoneyBill size={20} />,
  },
  {
    label: "My Profile",
    icon: <FaUser size={20} />,
  },
  {
    label: "Tickets",
    icon: <FaTicket size={20} />,
  },
];
function Dashboard() {
  const getRandomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <DashboardLayout>
      <div className="flex flex-col items-start gap-y-8">
        <div className="flex items-start flex-col gap-y-3">
          <span className="text-2xl font-semibold">Welcome, Victor.</span>
          <div className="w-[400px] rounded-2xl flex justify-between items-center py-5 px-6 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] shadow-lg">
            <div className="flex flex-col items-start gap-y-4">
              {/* Hide Balance Button */}
              <button className="bg-white/30 hover:bg-white/40 transition-all duration-300 flex items-center gap-x-1 px-3 py-1 rounded-full backdrop-blur-md">
                <FaEye className="text-white text-sm" />
                <span className="text-xs font-medium text-white">
                  Hide Balance
                </span>
              </button>

              {/* Balance Display */}
              <div className="flex flex-col text-white">
                <span className="text-sm font-medium opacity-90">
                  Current Balance
                </span>
                <span className="text-[40px] font-extrabold tracking-wide">
                  N245,000
                </span>
              </div>
            </div>

            {/* Decorative Image */}
            <Image
              src={"./images/stars.svg"}
              width={100}
              height={100}
              alt=""
              className="opacity-90"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-3 ">
          <span className="text-[#111111] font-semibold text-xl">
            Shortcuts
          </span>
          <div className="grid grid-cols-4 gap-y-3 gap-x-3 w-full">
            {shortcuts.map((item, index) => {
              const bgColor = useMemo(getRandomColor, []); // Generate random color per render

              return (
                <div
                  key={index}
                  className="w-[250px] h-[100px] text-defaultBlack hover:border-default cursor-pointer rounded-lg flex items-center gap-x-3 justify-center bg-white border-2 shadow-box bg-opacity-35 p-4"
                >
                  {/* Icon container */}
                  <div
                    className={`w-[50px] h-[50px] flex items-center justify-center rounded-full ${bgColor}`}
                  >
                    <span className="text-[25px] text-white">{item.icon}</span>
                  </div>

                  <span className="text-[20px]">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-4 w-full">
          <span className="text-[#111111] font-semibold text-2xl">
            Transaction History
          </span>
          <div className="w-full bg-white shadow-box p-10">
            <TableComponent DATA={data} COLUMNS={TRANSACTION_COLUMN} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
