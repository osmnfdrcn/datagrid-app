"use client";
import { Button } from "@/components/common/button";
import { setShowAddDataModal } from "@/store/slices/appSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { Plus } from "lucide-react";

const DataTableAdd = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((store: RootState) => store.data);
  const handleAddd = () => {
    dispatch(setShowAddDataModal(true));
  };

  return (
    <>
      <Button
        className="bg-slate-100 text-slate-500 hover:bg-slate-300 transition duration-500"
        variant="outline"
        size="sm"
        onClick={handleAddd}
        disabled={isLoading}
      >
        <Plus className="mr-2 h-4 w-4" /> Yeni
      </Button>
      {error}
    </>
  );
};

export default DataTableAdd;
