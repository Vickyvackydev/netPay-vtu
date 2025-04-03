"use client";

import Image from "next/image";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

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
          {row.original.transaction_value}
        </span>
      </div>
    ),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: ({ row }: { row: any }) => (
      <span className="text-sm font-normal text-[#4B5563]">
        {moment(row?.original?.created_at).format("MMM D, YYYY")}
      </span>
    ),
  }),
  columnHelper.accessor("time", {
    header: "Time",
    cell: ({ row }: { row: any }) => (
      <span className="text-sm font-medium text-[#111827]">
        {row?.original?.time}
      </span>
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
        {row.original.transaction_type === "wallet_funding" && "wallet funding"}
      </span>
    ),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: ({ row }) => (
      <span
        className={`text-xl font-medium ${
          row.original.status === "successful"
            ? "text-[#008080]"
            : "text-[#D10019]"
        }`}
      >
        {row.original.status === "successful"
          ? `+${row.original.amount}`
          : `-${row.original.amount}`}
      </span>
    ),
  }),
];
