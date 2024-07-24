import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddNewCategoryModal = () => {
  const [category, setCategory] = useState("");

  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>Add New Category</DialogTitle>
        <DialogDescription>
          Add a new category to the store to organize your products.
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category name"
        />
      </div>

      <DialogFooter>
        <Button type="submit" className="py-3.5">
          Add New Category
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddNewCategoryModal;
