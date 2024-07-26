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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageOff, ListFilter, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

import TablesSkeleton from "../../../components/skeletons/admin/tablesSkeleton";
import convertDate from "../../../utils/convertDate";

const OrdersPage = () => {
  //   const { data: { products: orders } = [], isLoading: isOrdersLoading } =
  //     useGetAllProductssQuery();
  const isOrdersLoading = false;
  const orders = [
    {
      _id: 1,
      profilePic: true,
      title: "Product 1",
      status: "fulfilled",
    },
    {
      _id: 2,
      profilePic: false,
      title: "Product 1",
      status: "declined",
    },
    {
      _id: 3,
      profilePic: true,
      title: "Product 1",
      status: "refunded",
    },
  ];

  return (
    <main className="grid flex-1 items-start gap-4 md:gap-8 h-full">
      {isOrdersLoading ? (
        <TablesSkeleton />
      ) : (
        <Tabs
          defaultValue="all"
          className="h-full overflow-auto whitespace-nowrap"
        >
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>

            <div className="ml-auto flex items-center gap-2 h-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Fulfilled
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <TabsContent value="all" className="mt-5 h-full">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader className="px-7">
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                  Recent orders from your store.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] table-cell">
                        Image
                      </TableHead>
                      <TableHead className="table-cell">Name</TableHead>
                      <TableHead className="table-cell">Status</TableHead>
                      <TableHead className="table-cell">Customer</TableHead>
                      <TableHead className="table-cell">Amount</TableHead>
                      <TableHead className="table-cell">Stock</TableHead>
                      <TableHead className="table-cell">Created at</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {orders?.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center">
                          No orders found
                        </TableCell>
                      </TableRow>
                    )}

                    {orders?.map((order) => (
                      <TableRow key={order?._id}>
                        <TableCell className="table-cell">
                          {order?.profilePic ? (
                            <img
                              src="/images/auth.jpg"
                              alt="order img"
                              className="aspect-square w-[4.6rem] h-full rounded-md object-cover object-center"
                            />
                          ) : (
                            <div className="w-[4.5rem] aspect-square flex-center rounded-md bg-muted">
                              <ImageOff className="size-8 text-muted-foreground/80" />
                            </div>
                          )}
                        </TableCell>

                        <TableCell className="font-medium capitalize whitespace-nowrap">
                          {order?.title?.length > 20
                            ? order?.title?.slice(0, 20) + "..."
                            : order?.title}
                        </TableCell>

                        <TableCell>
                          <div className="font-medium">Olivia Smith</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            olivia@example.com
                          </div>
                        </TableCell>

                        <TableCell className="table-cell">
                          <Badge
                            variant="outline"
                            className={cn(
                              "capitalize",
                              order?.status === "fulfilled" &&
                                "bg-green-500/10 text-green-500 border-green-500/50",
                              order?.status === "declined" &&
                                "bg-red-500/10 text-red-500 border-red-500/50",
                              order?.status === "refunded" &&
                                "bg-yellow-500/10 text-yellow-500 border-yellow-500/50"
                            )}
                          >
                            {order?.status}
                          </Badge>
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
                  Showing <strong>1-{orders?.length}</strong> of{" "}
                  <strong>{orders?.length}</strong> categories
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </main>
  );
};

export default OrdersPage;
