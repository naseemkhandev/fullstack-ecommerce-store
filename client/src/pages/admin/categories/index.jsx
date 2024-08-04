import { Edit, Loader2, PlusCircle, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../store/api/categoryApiSlice";
import convertDate from "../../../utils/convertDate";
import renderIcon from "../../../utils/renderIcon";
import AddNewCategoryModal from "./addNewCategoryModal";
import TablesSkeleton from "../../../components/skeletons/admin/tablesSkeleton";

const CategoriesPage = () => {
  const { data: { categories } = [], isLoading } = useGetAllCategoriesQuery();
  const [deleteCategory, { isLoading: isCategoryDeleting }] =
    useDeleteCategoryMutation();

  const handleDeleteCategory = async (id) => {
    const loading = toast.loading("Deleting category...");
    try {
      await deleteCategory(id).unwrap();
      toast.success("Category deleted successfully");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    } finally {
      toast.dismiss(loading);
    }
  };

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
                  <TableHead className="table-cell">Sr.#</TableHead>
                  <TableHead className="table-cell">Icon</TableHead>
                  <TableHead className="table-cell text-center">
                    Background Color
                  </TableHead>
                  <TableHead className="table-cell">Name</TableHead>
                  <TableHead className="table-cell">Slug</TableHead>
                  <TableHead className="table-cell">Created At</TableHead>
                  <TableHead className="text-center table-cell">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {categories?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center">
                      No Categories Found
                    </TableCell>
                  </TableRow>
                )}

                {categories?.map((category, index) => (
                  <TableRow key={category?._id}>
                    <TableCell className="table-cell">{index + 1}</TableCell>

                    <TableCell className="font-medium capitalize whitespace-nowrap text-primary">
                      {category?.icon ? (
                        renderIcon(category.icon)
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </TableCell>

                    <TableCell className="whitespace-nowrap flex-center">
                      <span
                        className="rounded-full w-8 h-8 p-2 block"
                        style={{ background: category?.bgColor }}
                      ></span>
                    </TableCell>

                    <TableCell className="font-medium capitalize whitespace-nowrap">
                      {category?.name}
                    </TableCell>

                    <TableCell className="whitespace-nowrap text-gray-500">
                      <Link to={`/products?cat=${category?.slug}`}>
                        {category?.slug}
                      </Link>
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
                            className="text-primary hover:text-primary hover:bg-green-500/10 rounded-full"
                          >
                            <Edit className="size-5" />
                          </Button>
                        </DialogTrigger>

                        <AddNewCategoryModal categoryToUpdate={category} />
                      </Dialog>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteCategory(category?._id)}
                        disabled={isCategoryDeleting}
                        className="text-red-500 hover:text-red-500 disabled:cursor-not-allowed hover:bg-red-500/10 rounded-full"
                      >
                        {isCategoryDeleting ? (
                          <Loader2 className="size-5 animate-spin opacity-80 cursor-not-allowed" />
                        ) : (
                          <Trash2 className="size-5" />
                        )}
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
