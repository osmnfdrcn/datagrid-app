"use client";
import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { DataTablePagination } from "./DataTablePagination";
import DataTableSearch from "./DataTableSearch";
import DataTableAdd from "./DataTableAdd";
import TableComponent from "./TableComponent";

interface DataTableWrapperProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTableWrapper<TData, TValue>({
  columns,
  data,
}: DataTableWrapperProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    // https://github.com/TanStack/table/issues/4280

    // globalFilterFn: (row, columnId, filterValue) => {
    //   const safeValue = (() => {
    //     const value = row.getValue(columnId);
    //     return typeof value === "number" ? String(value) : value;
    //   })();

    //   return safeValue?.toLowerCase().includes(filterValue.toLowerCase());
    // },
  });

  return (
    <>
      <div className="flex items-center justify-between gap-8 py-4">
        <DataTableSearch table={table} entries={data as any} />
        <DataTableAdd />
      </div>
      <TableComponent table={table} />
      <DataTablePagination table={table} />
    </>
  );
}
