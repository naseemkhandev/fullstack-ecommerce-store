import { Edit, PlusCircle, Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AddNewCategoryModal from "./addNewCategoryModal";

const CategoriesPage = () => {
  const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="grid gap-6 overflow-auto">
      <Card x-chunk="dashboard-06-chunk-0" className="overflow-auto">
        <div className="flex-between">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>
              Manage your categories and their roles here.
            </CardDescription>
          </CardHeader>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2 px-3 mr-5 mb-2 py-3.5">
                <PlusCircle className="size-[1rem]" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add New Category
                </span>
              </Button>
            </DialogTrigger>

            <AddNewCategoryModal />
          </Dialog>
        </div>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {categories.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No Categories Found
                  </TableCell>
                </TableRow>
              )}

              {categories.map((user) => (
                <TableRow key={user?._id}>
                  <TableCell className="font-medium capitalize whitespace-nowrap">
                    Category Name
                  </TableCell>

                  <TableCell className="mr-auto flex items-center justify-end gap-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-green-500 hover:text-green-500 hover:bg-green-500/10 rounded-full"
                    >
                      <Edit className="size-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary hover:text-primary hover:bg-primary/10 rounded-full"
                    >
                      <Trash2Icon className="size-5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>

        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> categories
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CategoriesPage;
