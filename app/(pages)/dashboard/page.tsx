"use client";
import TableComponent from "@/components/table";
import { TRANSACTION_COLUMN } from "@/components/table/columns";
import { data } from "@/constants";
import DashboardLayout from "@/layouts/DashboardLayout";
import { GetTransactions } from "@/services/others";
import { GetWalletBalance } from "@/services/payment";
import { selectUser } from "@/states/slices/authReducer";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaMoneyBill,
  FaPlane,
  FaPlus,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { FaMoneyBillTransfer, FaTicket } from "react-icons/fa6";

import { MdPayments, MdSimCard } from "react-icons/md";
import { useSelector } from "react-redux";

const shortcuts = [
  {
    label: "Add Money",
    icon: <FaWallet size={20} />,
    link: "/add-money",
  },
  {
    label: "Transfer",
    icon: <FaMoneyBillTransfer size={20} />,
    link: "/transfer",
  },
  {
    label: "Airtime",
    icon: <MdSimCard size={20} />,
    link: "/buy-airtime",
  },
  {
    label: "Bundle",
    icon: <MdPayments size={20} />,
    link: "/bundles",
  },
  {
    label: "Flights",
    icon: <FaPlane size={20} />,
    link: "/flights",
  },
  {
    label: "Bills",
    icon: <FaMoneyBill size={20} />,
    link: "/pay-bills",
  },
  {
    label: "My Profile",
    icon: <FaUser size={20} />,
    link: "/profile",
  },
  {
    label: "Tickets",
    icon: <FaTicket size={20} />,
    link: "/tickets",
  },
];
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

function Dashboard() {
  const router = useRouter();
  const walletBalance = useQuery({
    queryKey: ["wallet"],
    queryFn: GetWalletBalance,
  });
  const transactionHistory = useQuery({
    queryKey: ["transactions"],
    queryFn: GetTransactions,
  });
  const user = useSelector(selectUser);

  const [hideBalance, setHideBalance] = useState(false);

  return (
    <>
      <div className="flex flex-col items-start gap-y-8 w-full">
        <div className="flex items-start flex-col gap-y-3 w-full">
          <span className="text-2xl font-semibold">
            Welcome, {user?.full_name?.split(" ")[0]}.
          </span>
          <div className="w-full relative rounded-2xl flex justify-between items-end py-5 px-6 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] shadow-lg">
            <div className="flex flex-col items-start gap-y-4">
              {/* Hide Balance Button */}
              <button
                type="button"
                onClick={() => setHideBalance((prev) => !prev)}
                className="bg-white/30 hover:bg-white/40 transition-all duration-300 flex items-center gap-x-1 px-3 py-1 rounded-full backdrop-blur-md"
              >
                {!hideBalance ? (
                  <FaEyeSlash className="text-white text-sm" />
                ) : (
                  <FaEye className="text-white text-sm" />
                )}
                <span className="text-xs font-medium text-white">
                  {hideBalance ? "Show" : "Hide"} Balance
                </span>
              </button>

              {/* Balance Display */}
              <div className="flex flex-col text-white">
                <span className="text-sm font-medium opacity-90">
                  Current Balance
                </span>
                <span className="text-[40px] font-extrabold tracking-wide">
                  NGN{" "}
                  {hideBalance
                    ? "****"
                    : walletBalance?.data?.length > 0 &&
                      walletBalance?.data[0]?.balance}
                </span>
              </div>
            </div>

            {/* Decorative Image */}
            <button
              onClick={() => router.push("/add-money")}
              className="w-fit px-4 gap-x-3 text-white flex items-center justify-center bg-[#FFA500] transition-all duration-300 hover:scale-95 h-[40px] rounded-2xl shadow-lg"
            >
              <FaPlus /> Add Funds
            </button>
            <Image
              src={"./images/stars.svg"}
              width={100}
              height={100}
              alt=""
              className="opacity-90 absolute right-0 top-1"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-3 w-full">
          <span className="text-[#111111] font-semibold text-xl">
            Shortcuts
          </span>
          <div className="grid grid-cols-4 gap-y-3 gap-x-3 w-full">
            {shortcuts.map((item, index) => {
              const bgColor = useMemo(getRandomColor, []); // Generate random color per render

              return (
                <div
                  onClick={() => router.push(item.link)}
                  key={index}
                  className="w-full h-[100px] text-defaultBlack hover:border-default cursor-pointer rounded-lg flex items-center gap-x-3 justify-center bg-white border-2 shadow-box bg-opacity-35 p-4"
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
            {transactionHistory?.data?.data?.length > 0 ? (
              <TableComponent
                DATA={transactionHistory?.data?.data}
                COLUMNS={TRANSACTION_COLUMN}
              />
            ) : (
              <div>no transactions</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
