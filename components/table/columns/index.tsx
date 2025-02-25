"use client";

import Image from "next/image";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<any>();

export const TRANSACTION_COLUMN = [
  columnHelper.accessor("transaction", {
    header: "Transaction",
    cell: ({ row }) => (
      <div className="flex items-center justify-start gap-x-6">
        {row.original.status === "successful" ? (
          <Image
            src={"./images/sucess.svg"}
            width={32}
            height={32}
            className="rounded-full object-contain"
            alt="success"
          />
        ) : (
          <Image
            src={"./images/unsucess.svg"}
            width={32}
            height={32}
            className="rounded-full object-contain"
            alt="unsuccessful"
          />
        )}
        <span className="text-sm font-medium text-defaultBlack">
          {row.original.transaction_detail}
        </span>
      </div>
    ),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: () => (
      <span className="text-sm font-normal text-[#4B5563]">
        {`${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`}
      </span>
    ),
  }),
  columnHelper.accessor("time", {
    header: "Time",
    cell: () => (
      <span className="text-sm font-medium text-[#111827]">10:12 pm</span>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => (
      <span
        className={
          row.original.status === "successful"
            ? "text-[#008080]"
            : "text-[#D10019]"
        }
      >
        {row.original.status}
      </span>
    ),
  }),
  columnHelper.accessor("type", {
    header: "Type",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-[#111827]">
        {row.original.transaction_type}
      </span>
    ),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: ({ row }) => (
      <span
        className={`text-xl font-medium ${
          row.original.action_type === "sent"
            ? "text-[#008080]"
            : "text-[#D10019]"
        }`}
      >
        {row.original.action_type === "sent"
          ? `+${row.original.amount}`
          : `-${row.original.amount}`}
      </span>
    ),
  }),
];
