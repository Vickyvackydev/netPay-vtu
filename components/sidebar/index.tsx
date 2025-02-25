import React from "react";
import Logo from "../logo";
import { FaHome, FaPlane, FaWallet } from "react-icons/fa";
import { MdAddCircle, MdSimCard, MdPayment } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBills, FaMoneyBillTransfer, FaTicket } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="w-[224px] h-screen pt-9 bg-default flex flex-col items-center justify-start">
      <Logo size={150} />
      <div className="w-full px-1 mt-10 flex flex-col gap-y-5">
        <div className="w-full py-3 pl-5 hover:bg-white flex items-center  gap-x-3 text-white hover:border-r rounded-md cursor-pointer hover:text-default font-medium hover:font-semibold">
          <FaHome />
          <span>Dashboard</span>
        </div>
        <div className="w-full py-3 pl-5 hover:bg-white flex items-center  gap-x-3 text-white hover:border-r rounded-md cursor-pointer hover:text-default font-medium hover:font-semibold">
          <FaWallet />
          <span>Add money</span>
        </div>
        <div className="w-full py-3 pl-5 hover:bg-white flex items-center  gap-x-3 text-white hover:border-r rounded-md cursor-pointer hover:text-default font-medium hover:font-semibold">
          <FaMoneyBillTransfer />
          <span>Transfer</span>
        </div>
        <div className="w-full py-3 pl-5 hover:bg-white flex items-center  gap-x-3 text-white hover:border-r rounded-md cursor-pointer hover:text-default font-medium hover:font-semibold">
          <MdSimCard />
          <span>Airtime</span>
        </div>
        <div className="w-full py-3 pl-5 hover:bg-white flex items-center  gap-x-3 text-white hover:border-r rounded-md cursor-pointer hover:text-default font-medium hover:font-semibold">
          <MdPayment />
          <span>Bundle</span>
        </div>
        <div className="w-full py-3 pl-5 hover:bg-white flex items-center  gap-x-3 text-white hover:border-r rounded-md cursor-pointer hover:text-default font-medium hover:font-semibold">
          <FaMoneyBills />
          <span>Bills</span>
        </div>
        <div className="w-full py-3 pl-5 hover:bg-white flex items-center  gap-x-3 text-white hover:border-r rounded-md cursor-pointer hover:text-default font-medium hover:font-semibold">
          <FaPlane />
          <span>Flight</span>
        </div>
        <div className="w-full py-3 pl-5 hover:bg-white flex items-center  gap-x-3 text-white hover:border-r rounded-md cursor-pointer hover:text-default font-medium hover:font-semibold">
          <FaTicket />
          <span>Tickets</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
