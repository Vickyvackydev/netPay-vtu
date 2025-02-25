"use client";

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

interface TableData {
  [key: string]: any;
}

interface TableProps {
  DATA: TableData[];
  COLUMNS: any[];
}

function TableComponent({ DATA, COLUMNS }: TableProps) {
  const table = useReactTable({
    data: DATA,
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full">
      {/* Table */}
      <table className="w-full table-auto border-collapse text-right">
        <thead className="w-full text-start">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-[#E5E7EB]">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="whitespace-nowrap pb-2 pl-6 pr-3 text-left text-sm font-semibold text-primary-default"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="px-8">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-[#E5E7EB] text-left">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="py-5 pl-6 pr-3 text-sm text-gray-700"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {table.getPageCount() > 1 && (
        <div className="mt-8 flex w-full items-center justify-between">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="flex h-[36px] w-[100px] items-center justify-center rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-sm font-normal text-[#111827]"
          >
            <FaChevronLeft size={20} />
            <span>Previous</span>
          </button>
          <div className="flex items-center gap-x-2">
            {Array.from({ length: table.getPageCount() }, (_, index) => (
              <button
                key={index}
                onClick={() => table.setPageIndex(index)}
                className={`flex h-[36px] w-[36px] items-center justify-center rounded-md border border-[#E5E7EB] bg-[#F9FAFB] ${
                  table.getState().pagination.pageIndex === index
                    ? "bg-gray-300"
                    : ""
                }`}
              >
                <span className="text-sm text-primary-default">
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="flex h-[36px] w-[100px] items-center justify-center rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-sm font-normal text-[#111827]"
          >
            <span>Next</span>
            <FaChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default TableComponent;
