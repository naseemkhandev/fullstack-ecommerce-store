import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { LogOut, Menu, Package2, Search } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { useToast } from "../components/ui/use-toast";
import { adminLinks } from "../constants/adminLinks";
import { useLogoutMutation } from "../store/api/authApiSlice";
import { removeUser } from "../store/slices/authSlice";

const AdminLayout = () => {
  const authUser = useSelector((state) => state.auth.user);
  const { toast } = useToast();
  const location = useLocation();
  const dispatch = useDispatch();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [logoutMutation] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutMutation().unwrap();
      dispatch(removeUser());
      toast({
        title: "Logged out successfully!",
        type: "success",
      });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        type: "error",
      });
    }
  };

  return authUser && !authUser?.isAdmin ? (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">ShopWave</span>
            </Link>
          </div>

          <div className="flex-1 mt-5 h-full">
            <nav className="grid items-start px-2 text-sm lg:px-4 gap-2">
              {adminLinks.map((link) => (
                <Link
                  key={link.id}
                  to={`/admin${link.path}`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3.5 text-base text-muted-foreground transition-all hover:text-primary hover:bg-primary/20 cursor-pointer",
                    {
                      "bg-primary hover:bg-primary hover:text-white text-white":
                        location.pathname === `/admin${link.path}`,
                    }
                  )}
                >
                  <link.icon className="size-5" />
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="px-2 pb-5">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className={cn(
                "flex items-center justify-start gap-3 rounded-lg px-4 py-4 text-[.95rem] text-muted-foreground transition-all hover:text-primary hover:bg-primary/20 cursor-pointer w-full"
              )}
            >
              <LogOut className="size-[1.2rem] rotate-180" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col">
              <div className="flex items-center border-b pb-5 -mt-2">
                <Link to="/" className="flex items-center gap-2 font-semibold">
                  <Package2 className="h-6 w-6" />
                  <span className="">ShopWave</span>
                </Link>
              </div>

              <nav className="grid items-start text-sm gap-2 mt-5">
                {adminLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={`/admin${link.path}`}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-4 text-[.95rem] text-muted-foreground transition-all hover:text-primary hover:bg-primary/20 cursor-pointer",
                      {
                        "bg-primary hover:bg-primary hover:text-white text-white":
                          location.pathname === `/admin${link.path}`,
                      }
                    )}
                  >
                    <link.icon className="size-[1.2rem]" />
                    {link.title}
                  </Link>
                ))}
              </nav>

              <Button
                variant="ghost"
                onClick={handleLogout}
                className={cn(
                  "flex items-center justify-start mt-auto gap-3 rounded-lg px-4 py-4 text-[.95rem] text-muted-foreground transition-all hover:text-primary hover:bg-primary/20 cursor-pointer"
                )}
              >
                <LogOut className="size-[1.2rem] rotate-180" />
                Logout
              </Button>
            </SheetContent>
          </Sheet>

          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-10 py-3.5 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </header>

        <main className="flex flex-1 flex-col gap-4 lg:gap-6">
          <div className="flex items-center capitalize pl-4 lg:pl-6 mt-5">
            <Breadcrumb>
              <BreadcrumbList>
                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <React.Fragment key={name}>
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage className="text-muted-foreground opacity-80">
                            {name}
                          </BreadcrumbPage>
                        ) : (
                          <Link to={routeTo} className="text-primary">
                            {name}
                          </Link>
                        )}
                      </BreadcrumbItem>
                      {!isLast && <BreadcrumbSeparator />}
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminLayout;
