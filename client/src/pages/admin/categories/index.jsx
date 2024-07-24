import { Link } from "react-router-dom";
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
import { useGetAllCategoriesQuery } from "../../../store/api/categoryApiSlice";
import TablesSkeleton from "../../../components/skeletons/admin/tablesSkeleton";
import convertDate from "../../../utils/convertDate";

const CategoriesPage = () => {
  const { data: { categories } = [], isLoading } = useGetAllCategoriesQuery();

  return (
    <div className="grid gap-6 overflow-auto">
      {isLoading ? (
        <div className="grid w-full gap-6 overflow-auto">
          <TablesSkeleton />
        </div>
      ) : (
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
                  <TableHead>Sr.#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
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

                {categories.map((category, index) => (
                  <TableRow key={category?._id}>
                    <TableCell className="table-cell">{index + 1}</TableCell>

                    <TableCell className="font-medium capitalize whitespace-nowrap">
                      {category?.name}
                    </TableCell>

                    <TableCell className="whitespace-nowrap text-gray-500">
                      <Link href="/category-name">{category?.slug}</Link>
                    </TableCell>

                    <TableCell className="whitespace-nowrap opacity-50 font-medium">
                      {convertDate(category?.createdAt)}
                    </TableCell>

                    <TableCell className="mr-auto flex items-center justify-center gap-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-green-500 hover:text-green-500 hover:bg-green-500/10 rounded-full"
                          >
                            <Edit className="size-5" />
                          </Button>
                        </DialogTrigger>

                        <AddNewCategoryModal categoryToUpdate={category} />
                      </Dialog>

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
              Showing <strong>1-{categories?.length}</strong> of{" "}
              <strong>{categories?.length}</strong> categories
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default CategoriesPage;
