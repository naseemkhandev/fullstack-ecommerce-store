import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import AddNewCategoryModal from "./addNewCategoryModal";

const CategoriesPage = () => {
  return (
    <div className="grid gap-6">
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader className="p-4">
          <div className="flex items-center w-full">
            <div className="w-full">
              <CardTitle>Add Category</CardTitle>
              <CardDescription>
                Add a new category to the store to organize your products.
              </CardDescription>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="py-3.5">Add New Category</Button>
              </DialogTrigger>
              <AddNewCategoryModal />
            </Dialog>
          </div>
        </CardHeader>

        <Separator />

        <div className="p-4">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex-between">
              <p>Category {i + 1}</p>
              <Button variant="ghost">
                <X className="size-[1rem]" />
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CategoriesPage;
