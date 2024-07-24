import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

import { useAddNewCategoryMutation } from "../../../store/api/categoryApiSlice";

const AddNewCategoryModal = () => {
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");

  const [addNewCategory, { isLoading }] = useAddNewCategoryMutation();

  const handleAddNewCategory = async (e) => {
    e.preventDefault();
    try {
      await addNewCategory({ name: category }).unwrap();
      toast.success("Category added successfully");
      setCategory("");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    const generateSlug = (name) => {
      return name
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    };

    setSlug(generateSlug(category));
  }, [category]);

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

      <div className="flex flex-col gap-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          value={slug}
          placeholder="Category slug"
          disabled
          className="disabled:bg-muted-foreground/20"
        />
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button
            type="submit"
            disabled={isLoading}
            onClick={handleAddNewCategory}
            className="py-3.5"
          >
            Add New Category
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddNewCategoryModal;
