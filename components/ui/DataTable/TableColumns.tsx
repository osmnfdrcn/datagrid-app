"use client";

import { Button } from "@/components/common/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type SocialMediaDataType = {
  id: string;
  socialName: string;
  socialLink: string;
  description: string;
};

export const columns: ColumnDef<SocialMediaDataType>[] = [
  {
    accessorKey: "socialName",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex cursor-pointer"
        >
          Social Name
          <ArrowUpDown className="text-left ml-2 h-4 w-4" />
        </div>
      );
    },
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id));
    // },

    //hata react-table
    // Uncaught TypeError: n.toLowerCase is not a function
    // at Object.p [as filterFn] (78-3f45cceae893b867.js:29:2128)
    // at i.key (78-3f45cceae893b867.js:29:46743)
    // at Object._getFilteredRowModel (78-3f45cceae893b867.js:26:354)
    // at Object.getFilteredRowModel (78-3f45cceae893b867.js:29:20715)
    // https://github.com/TanStack/table/issues/4280
  },
  {
    accessorKey: "socialLink",
    header: () => <div className="text-left">Link</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
