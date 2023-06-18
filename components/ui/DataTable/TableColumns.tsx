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
    // accessorFn: (table) => table.toString(),
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
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
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
  },
];
