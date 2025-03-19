import React from "react";
import Logo from "../logo";
import { FaHome, FaPlane, FaWallet } from "react-icons/fa";
import { MdSimCard, MdPayment } from "react-icons/md";

import { FaMoneyBills, FaMoneyBillTransfer, FaTicket } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarData = [
  {
    label: "Dashboard",
    icon: <FaHome />,
    link: "/dashboard",
  },
  {
    label: "Add money",
    icon: <FaWallet />,
    link: "/add-money",
  },
  {
    label: "Transfer",
    icon: <FaMoneyBillTransfer />,
    link: "/transfer",
  },
  {
    label: "Airtime",
    icon: <MdSimCard />,
    link: "/purchase-airtime",
  },
  {
    label: "Bundle",
    icon: <MdPayment />,
    link: "/purchase-data",
  },
  {
    label: "Bills",
    icon: <FaMoneyBills />,
    link: "/utilities",
  },
  {
    label: "Flights",
    icon: <FaPlane />,
    link: "/flights",
  },
  {
    label: "Tickets",
    icon: <FaTicket />,
    link: "/tickets",
  },
];
function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-[224px] h-screen pt-9 flex flex-col items-center justify-start bg-white bg-opacity-30 backdrop-blur-lg shadow-md border-r border-gray-200">
      <Logo size={150} />
      <div className="w-full px-3 mt-10 flex flex-col gap-y-2 h-[600px] overflow-y-auto scrollbar-hide">
        {sidebarData.map((item) => (
          <Link
            key={item.label}
            href={item.link}
            className={`w-full py-3 pl-5 flex items-center rounded-2xl gap-x-3 text-gray-700 hover:text-gray-900 font-medium ${
              pathname === item.link && "bg-default"
            } transition-all duration-300 hover:bg-gray-100 hover:rounded-md`}
          >
            <span
              className={`text-lg ${
                pathname === item.link ? "text-white" : ""
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[16px] ${
                pathname === item.link ? "text-white" : ""
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
