import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageOff, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";

import { Link } from "react-router-dom";
import TablesSkeleton from "../../../components/skeletons/admin/tablesSkeleton";
import { useGetAllProductsQuery } from "../../../store/api/productApiSlice";
import convertDate from "../../../utils/convertDate";

const ProductsPage = () => {
  const { data: { products } = [], isLoading: isProductsLoading } =
    useGetAllProductsQuery();
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredProducts = products?.filter((product) => {
    if (selectedTab === "all") return true;
    return product.status === selectedTab;
  });

  return (
    <main className="grid flex-1 items-start gap-4 md:gap-8 h-full">
      {isProductsLoading ? (
        <TablesSkeleton />
      ) : (
        <Tabs
          defaultValue="all"
          className="h-full overflow-auto whitespace-nowrap"
          onValueChange={(value) => setSelectedTab(value)}
        >
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all" className="px-4">
                All
              </TabsTrigger>
              <TabsTrigger value="active" className="px-2">
                Active
              </TabsTrigger>
              <TabsTrigger value="draft" className="px-3">
                Draft
              </TabsTrigger>
            </TabsList>

            <div className="ml-auto flex items-center gap-2 h-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filter
                    </span>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Price
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Stock</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Created at
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="mt-5 h-full">
            <Card x-chunk="dashboard-06-chunk-0">
              <div className="flex-between">
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription className="text-wrap">
                    Manage your products and view their sales performance.
                  </CardDescription>
                </CardHeader>

                <Link to="/admin/products/add">
                  <Button className="gap-2 px-3 mr-5 mb-2 py-3.5">
                    <PlusCircle className="size-[1rem]" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add New Product
                    </span>
                  </Button>
                </Link>
              </div>

              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] table-cell">
                        Image
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="table-cell">Price</TableHead>
                      <TableHead className="table-cell">Stock</TableHead>
                      <TableHead className="table-cell">Created at</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {filteredProducts?.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center">
                          No products found
                        </TableCell>
                      </TableRow>
                    )}

                    {filteredProducts?.map((product) => (
                      <TableRow key={product?._id}>
                        <TableCell className="table-cell">
                          {product?.image?.secure_url ? (
                            <img
                              src={product?.image?.secure_url}
                              alt="product img"
                              className="aspect-square w-[4.6rem] h-full rounded-md object-cover object-center"
                            />
                          ) : (
                            <div className="w-[4.5rem] aspect-square flex-center rounded-md bg-muted">
                              <ImageOff className="size-8 text-muted-foreground/80" />
                            </div>
                          )}
                        </TableCell>

                        <TableCell className="font-medium capitalize whitespace-nowrap">
                          {product?.title?.length > 20
                            ? product?.title?.slice(0, 20) + "..."
                            : product?.title}
                        </TableCell>

                        <TableCell className="table-cell">
                          <Badge variant="outline">{product?.status}</Badge>
                        </TableCell>

                        <TableCell className="table-cell">$499.99</TableCell>

                        <TableCell className="font-medium capitalize whitespace-nowrap">
                          25
                        </TableCell>

                        <TableCell className="table-cell">
                          {convertDate(new Date().toISOString())}
                        </TableCell>

                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="w-full pl-0"
                              >
                                <DropdownMenuItem className="w-full">
                                  Delete
                                </DropdownMenuItem>
                              </Button>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>

              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-{filteredProducts?.length}</strong> of{" "}
                  <strong>{filteredProducts?.length}</strong> products
                </div>
              </CardFooter>
            </Card>
          </div>
        </Tabs>
      )}
    </main>
  );
};

export default ProductsPage;
