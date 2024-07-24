import toast from "react-hot-toast";

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
import {
  ListFilter,
  MoreHorizontal,
  PlusCircle,
  UserRound,
} from "lucide-react";

import TablesSkeleton from "../../../components/skeletons/admin/tablesSkeleton";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "../../../store/api/userApiSlice";

const UsersPage = () => {
  const { data: { users } = {}, isLoading: isUsersLoading } =
    useGetAllUsersQuery();

  const [deleteUser, { isLoading: isUserDeleting }] = useDeleteUserMutation();

  const handleDelete = async (id) => {
    try {
      await deleteUser(id).unwrap();
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  return (
    <main className="grid flex-1 items-start gap-4 md:gap-8 h-full">
      {isUsersLoading ? (
        <TablesSkeleton />
      ) : (
        <Tabs
          defaultValue="all"
          className="h-full overflow-auto whitespace-nowrap"
        >
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
                    Role
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Total Sales
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Created at
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <TabsContent value="all" className="mt-5 h-full">
            <Card x-chunk="dashboard-06-chunk-0">
              <div className="flex-between">
                <CardHeader>
                  <CardTitle>Users</CardTitle>
                  <CardDescription>
                    Manage your users and their roles here.
                  </CardDescription>
                </CardHeader>

                <Button className="gap-2 px-3 mr-5 mb-2 py-3">
                  <PlusCircle className="size-[1rem]" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add User
                  </span>
                </Button>
              </div>

              <CardContent className="h-full">
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
                      <TableHead className="hidden sm:table-cell">
                        Role
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Total Sales
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Status
                      </TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {users.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center">
                          No users found
                        </TableCell>
                      </TableRow>
                    )}

                    {users.map((user) => (
                      <TableRow key={user?._id}>
                        <TableCell className="hidden sm:table-cell">
                          {user?.profilePic ? (
                            <img
                              src="/images/auth.jpg"
                              alt="product img"
                              className="w-[4.5rem] aspect-square rounded-md object-cover object-center"
                            />
                          ) : (
                            <div className="w-[4.5rem] aspect-square flex-center rounded-md bg-muted">
                              <UserRound className="size-8 text-muted-foreground" />
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="font-medium capitalize whitespace-nowrap">
                          {user?.name}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {user?.email}
                        </TableCell>

                        <TableCell>
                          <Badge variant="outline">
                            {user?.isAdmin ? "Admin" : "User"}
                          </Badge>
                        </TableCell>

                        <TableCell className="hidden md:table-cell">
                          25
                        </TableCell>

                        <TableCell className="hidden md:table-cell">
                          <Badge
                            variant="outline"
                            className={
                              user?.isVerified
                                ? "bg-green-500/10 text-green-500 border-green-500/50"
                                : "bg-primary/10 text-primary border-primary/50"
                            }
                          >
                            {user?.isVerified ? "Verified" : "Unverified"}
                          </Badge>
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
                                onClick={() => handleDelete(user?._id)}
                                size="sm"
                                variant="ghost"
                                className="w-full pl-0"
                                isLoading={isUserDeleting}
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
                  Showing <strong>1-10</strong> of <strong>32</strong> users
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </main>
  );
};

export default UsersPage;
