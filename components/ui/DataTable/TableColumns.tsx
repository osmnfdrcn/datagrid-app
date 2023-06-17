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
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Social Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "socialLink",
    header: () => <div className="text-left">Link</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
