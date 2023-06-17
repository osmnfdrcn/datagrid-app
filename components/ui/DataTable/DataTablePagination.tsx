import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/common/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const paginationArrows = [
    {
      id: 1,
      className: "hidden h-8 w-8 p-0 lg:flex",
      handleClick: () => table.setPageIndex(0),
      disabled: !table.getCanPreviousPage(),
      icon: ChevronsLeft,
    },
    {
      id: 2,
      className: "h-8 w-8 p-0",
      handleClick: () => table.previousPage(),
      disabled: !table.getCanPreviousPage(),
      icon: ChevronLeft,
    },
    {
      id: 3,
      className: "h-8 w-8 p-0",
      handleClick: () => table.nextPage(),
      disabled: !table.getCanNextPage(),
      icon: ChevronRight,
    },
    {
      id: 4,
      className: "hidden h-8 w-8 p-0 lg:flex",
      handleClick: () => table.setPageIndex(table.getPageCount() - 1),
      disabled: !table.getCanNextPage(),
      icon: ChevronsRight,
    },
  ];
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-2">
        {/* total records */}
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} kayit.
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          {/* records per page */}
          <div className="flex items-center space-x-2">
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 15, 20, 25].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* page number of total page */}
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
          </div>

          {/* next, previous, first, last buttons */}
          <div className="flex items-center space-x-2">
            {paginationArrows.map((a) => (
              <Button
                variant="outline"
                className={a.className}
                onClick={a.handleClick}
                disabled={a.disabled}
                key={a.id}
              >
                <a.icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
