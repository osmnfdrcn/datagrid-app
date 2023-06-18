import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { X } from "lucide-react";

import React, { useState } from "react";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import { SocialDataType } from "@/types";

type Props = {
  table: any;
  entries: SocialDataType[];
};

function transformArray(arr: any, propertyName: string) {
  const uniqueValues = new Set();
  const newArray = [];
  for (const obj of arr) {
    const value = obj[propertyName];
    if (!uniqueValues.has(value)) {
      uniqueValues.add(value);
      newArray.push({ label: value, value: value });
    }
  }
  return newArray;
}

const DataTableSearch = ({ table, entries }: Props) => {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;

  const uniqueSocialLinkFieldValues = transformArray(entries, "socialLink");
  const uniqueDescriptionFieldValues = transformArray(entries, "description");

  return (
    <div className="flex justify-start items-center gap-4 w-full">
      <Input
        placeholder="Ara..."
        value={
          (table.getColumn("socialName")?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn("socialName")?.setFilterValue(event.target.value)
        }
        className="max-w-xs focus"
      />

      {table.getColumn("socialLink") && (
        <DataTableFacetedFilter
          column={table.getColumn("socialLink")}
          title="Link"
          options={uniqueSocialLinkFieldValues}
        />
      )}
      {table.getColumn("description") && (
        <DataTableFacetedFilter
          column={table.getColumn("description")}
          title="Description"
          options={uniqueDescriptionFieldValues}
        />
      )}

      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Temizle <X className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default DataTableSearch;
