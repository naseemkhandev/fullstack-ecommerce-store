import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { LogOut, Menu, Search } from "lucide-react";
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

import { adminLinks } from "../constants/adminLinks";
import useLogout from "../hooks/useLogout";

const AdminLayout = () => {
  const authUser = useSelector((state) => state.auth.user);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const { handleLogout, isLogouting } = useLogout();

  return authUser && authUser?.isAdmin ? (
    <div className="grid min-h-screen w-full md:grid-cols-[300px_1fr]">
      <div className="hidden border-r border-muted md:block bg-white">
        <div className="flex h-full max-h-screen flex-col gap-2 border-none shadow-lg rounded-2xl shadow-black/5">
          <div className="flex h-14 w-32 items-center px-4 lg:h-[60px] lg:px-6">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>

          <div className="flex-1 mt-5 h-full bg-white">
            <nav className="grid items-start px-2 text-sm lg:px-4 gap-2 bg-white border-none">
              {adminLinks.map((link) => (
                <Link
                  key={link.id}
                  to={`/admin${link.path}`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3.5 text-base text-muted-foreground transition-all hover:text-primary hover:bg-[#00A3B3]/20 border hover:border-[#00A3B3]/50 border-transparent cursor-pointer",
                    {
                      "bg-primary hover:bg-primary hover:text-white text-white":
                        location.pathname === `/admin${link.path}` ||
                        (link.path !== "" &&
                          location.pathname.startsWith(`/admin${link.path}`)),
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
              isLoading={isLogouting}
              className={cn(
                "flex items-center justify-start gap-3 rounded-lg px-4 py-4 text-[.95rem] text-muted-foreground transition-all hover:text-primary hover:bg-[#00A3B3]/20 border hover:border-[#00A3B3]/50 border-transparent cursor-pointer w-full"
              )}
            >
              <LogOut className="size-[1.2rem] rotate-180" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <header className="flex h-14 items-center bg-white gap-4 border-b px-4 lg:h-[60px] lg:px-6">
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

            <SheetContent side="left" className="flex flex-col bg-white">
              <div className="flex h-14 w-28 items-center lg:h-[60px] lg:px-6">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="w-full h-full"
                  />
                </Link>
              </div>

              <nav className="grid items-start text-sm gap-2 mt-5 bg-white">
                {adminLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={`/admin${link.path}`}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3.5 text-base text-muted-foreground transition-all hover:text-primary hover:bg-[#00A3B3]/20 border hover:border-[#00A3B3]/50 border-transparent cursor-pointer",
                      {
                        "bg-primary hover:bg-primary hover:text-white text-white":
                          location.pathname === `/admin${link.path}` ||
                          (link.path !== "" &&
                            location.pathname.startsWith(`/admin${link.path}`)),
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
                isLoading={isLogouting}
                className={cn(
                  "flex items-center justify-start mt-auto gap-3 rounded-lg px-4 py-4 text-[.95rem] text-muted-foreground transition-all hover:text-primary hover:bg-[#00A3B3]/20 border hover:border-[#00A3B3]/50 border-transparent cursor-pointer"
                )}
              >
                <LogOut className="size-[1.2rem] rotate-180" />
                Logout
              </Button>
            </SheetContent>
          </Sheet>

          <div className="w-full flex-1 bg-white">
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
        </header>

        <main className="flex flex-1 flex-col gap-4">
          <div className="flex items-center capitalize pl-6 mt-4">
            <Breadcrumb>
              <BreadcrumbList>
                {pathnames
                  .filter((name) => !/\d+/.test(name))
                  .map((name, index, filteredPathnames) => {
                    const routeTo = `/${filteredPathnames
                      .slice(0, index + 1)
                      .join("/")}`;
                    const isLast = index === filteredPathnames.length - 1;
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

          <div className="max-h-[calc(100vh-130px)] bg-neutral-50 pt-3 md:pt-5 h-full overflow-auto px-3 md:px-5">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminLayout;
