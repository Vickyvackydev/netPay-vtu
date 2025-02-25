"use client";

import React, { useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTable, usePagination, Column } from "react-table";

interface TableData {
  [key: string]: any;
}

interface TableProps {
  DATA: TableData[];
  COLUMNS: Column<TableData>[];
}

function TableComponent({ DATA, COLUMNS }: TableProps) {
  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => DATA, [DATA]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
    page, // For pagination
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    pageOptions,
    // @ts-ignore
    gotoPage,
    // @ts-ignore
    nextPage,
    // @ts-ignore
    previousPage,
    // @ts-ignore
    setPageSize,
    // @ts-ignore
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
      initialState: { pageIndex: 0 }, // Start from page 0
    },
    usePagination
  );

  return (
    <div className="w-full">
      {/* Table */}
      <table
        {...getTableProps()}
        className="w-full table-auto border-collapse text-right"
      >
        <thead className="w-full text-start">
          {headerGroups.map((headerGroup: any, index: number) => (
            <tr
              key={index}
              {...headerGroup.getHeaderGroupProps()}
              className="border-b border-[#E5E7EB]"
            >
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  className="whitespace-nowrap pb-2 pl-6 pr-3 text-left text-sm font-semibold text-primary-default"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="px-8 ">
          {page.map((row: any, index: number) => {
            prepareRow(row);
            return (
              <tr
                key={index}
                {...row.getRowProps()}
                className="border-b border-[#E5E7EB] text-left"
              >
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    className="py-5 pl-6 pr-3 text-sm text-gray-700"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      {/* <div className="">
        <span className="flex items-center gap-x-1 text-[14px] font-medium text-[#344054]">
          Page{" "}
          <span className="flex h-[27px] w-[27px] items-center justify-center rounded-md border border-[#D0D5DD]">
            {pageIndex + 1}
          </span>
          of
          <span>{pageOptions.length}</span>
        </span>
        <div>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="mr-2 rounded border border-[#D0D5DD] px-4 py-2 text-[14px] font-normal text-[#344054] disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="mr-2 rounded border border-[#D0D5DD] px-4 py-2 text-[14px] font-normal text-[#344054] disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div>
          <label>
            <span className="text-[14px] font-medium text-[#344054]">
              Entries per page:{" "}
            </span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="ml-2 rounded border px-2 py-1"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div> */}
      {pageOptions?.length > 5 && (
        <div className="mt-8 flex w-full items-center justify-between">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="flex h-[36px] w-[100px] items-center justify-center rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-sm font-normal text-[#111827]"
          >
            {/* <img src={CHEVRON_LEFT} className="h-[20px] w-[20px]" alt="" /> */}
            <FaChevronLeft size={20} />
            <span>Previous</span>
          </button>
          <div className="flex items-center gap-x-2">
            {pageOptions.map((_: any, index: number) => (
              <button
                key={index}
                className="flex h-[36px] w-[36px] items-center justify-center rounded-md border border-[#E5E7EB] bg-[#F9FAFB]"
              >
                <span className="text-sm text-primary-default">{`0${
                  index + 1
                }`}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="flex h-[36px] w-[100px] items-center justify-center rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-sm font-normal text-[#111827]"
          >
            <span>Next</span>
            {/* <img
              src={CHEVRON_LEFT}
              className="h-[20px] w-[20px] scale-x-[-1]"
              alt=""
            /> */}
            <FaChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default TableComponent;
