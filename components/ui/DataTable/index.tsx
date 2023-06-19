"use client";
import { columns } from "./TableColumns";
import { DataTableWrapper } from "./DataTableWrapper";
import { useAppSelector, RootState } from "@/store/store";
import AddNewEntryModal from "../Modal/AddNewEntryModal";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

export default function DataTable() {
  const [data, setData] = useState<unknown>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { showAddDataModal } = useAppSelector((store: RootState) => store.app);
  const { entries } = useAppSelector((store: RootState) => store.data);

  useEffect(() => {
    setData(entries);
    setIsLoading(false);
  }, [entries]);

  if (isLoading) return <Spinner />;
  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <DataTableWrapper columns={columns} data={data as any} />
      {showAddDataModal ? <AddNewEntryModal /> : null}
    </div>
  );
}
