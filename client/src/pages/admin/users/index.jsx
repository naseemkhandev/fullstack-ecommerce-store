import { useState } from "react";
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import { MoreHorizontal, PlusCircle, UserRound } from "lucide-react";

import { Link } from "react-router-dom";
import TablesSkeleton from "../../../components/skeletons/admin/tablesSkeleton";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "../../../store/api/userApiSlice";

const UsersPage = () => {
  const { data: { users } = [], isLoading: isUsersLoading } =
    useGetAllUsersQuery();

  const [deleteUser, { isLoading: isUserDeleting }] = useDeleteUserMutation();
  const [selectedTab, setSelectedTab] = useState("all");

  const handleDelete = async (id) => {
    try {
      await deleteUser(id).unwrap();
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  const filteredUsers = users?.filter((user) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "active") return user.isAdmin;
    if (selectedTab === "draft") return !user.isAdmin;
    return true;
  });

  return (
    <main className="grid flex-1 items-start gap-4 md:gap-8 h-full">
      {isUsersLoading ? (
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
                Admin
              </TabsTrigger>
              <TabsTrigger value="draft" className="px-3">
                Users
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-5 h-full">
            <Card x-chunk="dashboard-06-chunk-0">
              <div className="flex-between">
                <CardHeader>
                  <CardTitle>Users</CardTitle>
                  <CardDescription>
                    Manage your users and their roles here.
                  </CardDescription>
                </CardHeader>

                <Link to="/admin/users/add">
                  <Button className="gap-2 px-3 mr-5 mb-2 py-3.5">
                    <PlusCircle className="size-[1rem]" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add New User
                    </span>
                  </Button>
                </Link>
              </div>

              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] sm:table-cell">
                        Profile
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="table-cell">Email</TableHead>
                      <TableHead className="table-cell">Role</TableHead>
                      <TableHead className="table-cell">Total Sales</TableHead>
                      <TableHead className="table-cell">Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {filteredUsers?.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center">
                          No users found
                        </TableCell>
                      </TableRow>
                    )}

                    {filteredUsers?.map((user) => (
                      <TableRow key={user?._id}>
                        <TableCell className="table-cell">
                          {user?.profilePic?.secure_url ||
                          user?.profilePic?.length > 0 ? (
                            <img
                              src={
                                user?.profilePic?.secure_url || user?.profilePic
                              }
                              alt="product img"
                              className="w-[4.5rem] aspect-square rounded-md object-cover object-center bg-muted"
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
                        <TableCell className="table-cell">
                          {user?.email}
                        </TableCell>

                        <TableCell>
                          <Badge variant="outline">
                            {user?.isAdmin ? "Admin" : "User"}
                          </Badge>
                        </TableCell>

                        <TableCell className="table-cell">25</TableCell>

                        <TableCell className="table-cell">
                          <Badge
                            variant="outline"
                            className={
                              user?.isVerified
                                ? "bg-green-500/10 text-primary border-primary"
                                : "bg-red-500/10 text-red-500 border-red-500/50"
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
                              <Link to={`/admin/users/update/${user?._id}`}>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                              </Link>
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
                  Showing <strong>1-{filteredUsers?.length}</strong> of{" "}
                  <strong>{filteredUsers?.length}</strong> users
                </div>
              </CardFooter>
            </Card>
          </div>
        </Tabs>
      )}
    </main>
  );
};

export default UsersPage;
