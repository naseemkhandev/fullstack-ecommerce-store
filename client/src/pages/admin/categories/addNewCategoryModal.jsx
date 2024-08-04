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

import {
  useAddNewCategoryMutation,
  useUpdateCategoryMutation,
} from "../../../store/api/categoryApiSlice";
import generateSlug from "../../../utils/generateSlug";
import { CircleAlert } from "lucide-react";

const AddNewCategoryModal = ({ categoryToUpdate }) => {
  const [category, setCategory] = useState(categoryToUpdate?.name || "");
  const [icon, setIcon] = useState(categoryToUpdate?.icon || "");
  const [slug, setSlug] = useState("");

  const [addNewCategory, { isLoading: isAddingCategory }] =
    useAddNewCategoryMutation();
  const [updateCategory, { isLoading: isUpdatingCategory }] =
    useUpdateCategoryMutation();

  const handleAddNewCategory = async (e) => {
    e.preventDefault();
    try {
      if (categoryToUpdate) {
        if (
          categoryToUpdate.name === category &&
          categoryToUpdate.icon === icon &&
          generateSlug(categoryToUpdate.name) === slug
        ) {
          toast.success("No changes have been made", {
            style: {
              backgroundColor: "#fff2cc",
              padding: "10px",
              color: "#bf9000",
            },
            icon: <CircleAlert size={20} />,
          });
          return;
        } else {
          await updateCategory({
            id: categoryToUpdate._id,
            name: category,
            icon,
            slug,
          }).unwrap();
          toast.success("Category updated successfully");
          return;
        }
      } else {
        await addNewCategory({ name: category, slug, icon }).unwrap();
        toast.success("Category added successfully");
        setCategory("");
      }
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    setSlug(generateSlug(category));
  }, [category]);

  return (
    <DialogContent className="sm:max-w-[40rem]">
      <DialogHeader>
        <DialogTitle>
          {categoryToUpdate ? "Update Category" : "Add New Category"}
        </DialogTitle>
        <DialogDescription>
          {categoryToUpdate
            ? "Update the category details to save changes."
            : "Add a new category to the store to organize your products."}
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
        <Label htmlFor="icon">Icon Name</Label>
        <Input
          id="icon"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="Enter Category Icon Name"
          className="capitalize"
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

      <DialogFooter className="flex gap-3">
        <DialogClose asChild>
          <Button className="py-3.5 px-6" variant="outline">
            Cancel
          </Button>
        </DialogClose>

        <DialogClose asChild>
          <Button
            type="submit"
            isLoading={isAddingCategory || isUpdatingCategory}
            onClick={handleAddNewCategory}
            className="py-3.5"
          >
            {categoryToUpdate ? "Update" : "Add"} Category
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddNewCategoryModal;
