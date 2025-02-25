"use client";
import TableComponent from "@/components/table";
import { TRANSACTION_COLUMN } from "@/components/table/columns";
import { data } from "@/constants";
import DashboardLayout from "@/layouts/DashboardLayout";
import Image from "next/image";
import React from "react";
import {
  FaEye,
  FaMoneyBill,
  FaPlane,
  FaSimCard,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { FaMoneyBillTransfer, FaTicket } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
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
  return (
    <DashboardLayout>
      <div className="flex flex-col items-start gap-y-8">
        <div className="flex items-start flex-col gap-y-3">
          <span className="text-[32px] font-semibold">Welcome, Victor.</span>
          <div className="w-[400px] rounded-3xl flex justify-between items-center py-3 bg-default">
            <div className="flex flex-col items-start gap-y-4 pl-5">
              <div className="bg-white/50 flex items-center gap-x-1 p-1 rounded-2xl">
                <FaEye className="text-white" />
                <span className="text-xs font-normal text-white">
                  Hide Balance
                </span>
              </div>
              <div className="flex flex-col text-white">
                <span className="text-sm font-normal">Current Balance</span>
                <span className="text-[37px] font-extrabold">N245,000</span>
              </div>
            </div>
            <Image src={"./images/stars.svg"} width={150} height={150} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-3 ">
          <span className="text-[#111111] font-semibold text-2xl">
            Shortcuts
          </span>
          <div className="flex items-center justify-center gap-x-6">
            {shortcuts.map((item, index) => (
              <div
                key={index}
                className="w-[128px] h-[129px] text-defaultBlack rounded-lg flex flex-col items-center gap-y-2 justify-center bg-default bg-opacity-35"
              >
                {/* <FaWallet size={40} /> */}
                {item.icon}
                <span className="text-[20px]">{item.label}</span>
              </div>
            ))}
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
