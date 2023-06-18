"use client";
import { columns } from "./TableColumns";
import { DataTableWrapper } from "./DataTableWrapper";
import { useAppSelector, RootState } from "@/store/store";
import AddNewEntryModal from "../Modal/AddNewEntryModal";

export default function DataTable() {
  const { entries } = useAppSelector((store: RootState) => store.data);
  const { showAddDataModal } = useAppSelector((store: RootState) => store.app);

  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <DataTableWrapper columns={columns} data={entries} />
      {showAddDataModal ? <AddNewEntryModal /> : null}
    </div>
  );
}
