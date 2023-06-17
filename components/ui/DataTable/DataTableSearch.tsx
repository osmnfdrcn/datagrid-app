import { Input } from "@/components/common/input";
import React from "react";

type Props = {
  table: any;
};

const DataTableSearch = ({ table }: Props) => {
  return (
    <Input
      placeholder="Ara..."
      value={(table.getColumn("socialName")?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn("socialName")?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
};

export default DataTableSearch;
