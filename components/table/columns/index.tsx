"use client";

import Image from "next/image";

export const TRANSACTION_COLUMN = [
  {
    Header: "Transaction",
    accessor: "transaction",
    Cell: ({ row }: { row: any }) => {
      return (
        <div className="flex items-center justify-start gap-x-6">
          {row?.original?.status === "successful" ? (
            <Image
              src={"./images/sucess.svg"}
              width={32}
              height={32}
              className="rounded-full object-contain"
              alt="sucess"
            />
          ) : (
            <Image
              src={"./images/unsucess.svg"}
              width={32}
              height={32}
              className="rounded-full object-contain"
              alt="sucess"
            />
          )}
          <span className="text-sm font-medium text-defaultBlack">
            {row?.original?.transaction_detail}
          </span>
        </div>
      );
    },
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ row }: { row: any }) => (
      <span className="text-sm font-normal text-[#4B5563]">
        {`${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`}
      </span>
    ),
  },
  {
    Header: "Time",
    accessor: "time",
    Cell: ({ row }: { row: any }) => (
      <span className="text-sm font-medium text-[#111827]">10:12 pm</span>
    ),
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ row }: { row: any }) => {
      return (
        <span
          className={`${
            row?.original?.status === "successful"
              ? "text-[#008080]"
              : "text-[#D10019]"
          }`}
        >
          {row?.original?.status}
        </span>
      );
    },
  },
  {
    Header: "Type",
    accessor: "type",
    Cell: ({ row }: { row: any }) => (
      <span className="text-sm font-medium text-[#111827]">
        {row?.original?.transaction_type}
      </span>
    ),
  },
  {
    Header: "Amount",
    accessor: "amount",
    Cell: ({ row }: { row: any }) => (
      <span
        className={`text-xl font-medium ${
          row?.original?.action_type === "sent"
            ? "text-[#008080]"
            : "text-[#D10019]"
        }`}
      >
        {row?.original?.action_type === "sent"
          ? `+${row?.original?.amount}`
          : `-${row?.original?.amount}`}
      </span>
    ),
  },
];
