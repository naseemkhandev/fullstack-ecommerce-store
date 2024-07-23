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
import { ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";

const UsersPage = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all" className="px-4">
              All
            </TabsTrigger>
            <TabsTrigger value="active" className="px-2">
              Admin
            </TabsTrigger>
            <TabsTrigger value="draft" className="px-3">
              Users
            </TabsTrigger>
          </TabsList>

          <div className="ml-auto flex items-center gap-2">
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
                  Role
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Total Sales</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Created at</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TabsContent value="all" className="mt-5">
          <Card x-chunk="dashboard-06-chunk-0">
            <div className="flex-between">
              <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                  Manage your users and their roles here.
                </CardDescription>
              </CardHeader>

              <Button className="gap-2 px-4 mr-5 mb-2 py-3.5">
                <PlusCircle className="size-[1.2rem]" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add User
                </span>
              </Button>
            </div>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] sm:table-cell">
                      Profile
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Email
                    </TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Total Sales
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Created at
                    </TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {[...Array(10)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell className="hidden sm:table-cell">
                        <img
                          src="/images/auth.jpg"
                          alt="product img"
                          className="aspect-square w-full h-full rounded-md object-cover object-center"
                        />
                      </TableCell>
                      <TableCell className="font-medium">Naseem Khan</TableCell>
                      <TableCell className="hidden md:table-cell">
                        naseemkhan@gmail.com
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Admin</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">25</TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-07-12 10:42 AM
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
                            <DropdownMenuItem>Delete</DropdownMenuItem>
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
                Showing <strong>1-10</strong> of <strong>32</strong> users
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default UsersPage;
