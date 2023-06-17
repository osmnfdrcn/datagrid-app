import { Button } from "@/components/common/button";
import { Plus } from "lucide-react";

type DataTableAddProps = {
  table: any;
};

const DataTableAdd = ({ table }: DataTableAddProps) => {
  return (
    <Button
      className="bg-slate-100 text-slate-500"
      variant="outline"
      size="sm"
      onClick={() => {}}
    >
      <Plus className="mr-2 h-4 w-4" /> Add New
    </Button>
  );
};

export default DataTableAdd;
