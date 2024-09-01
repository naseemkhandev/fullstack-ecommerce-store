import { Heart, Menu, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSelector } from "react-redux";
import { navLinks } from "../../constants/navLinks";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const { handleLogout, isLogouting } = useLogout();

  const authUser = useSelector((state) => state.auth.user);
  const wishlist = useSelector((state) => state.favorites.products);
  const cart = useSelector((state) => state.cart.products);

  return (
    <header className="sticky top-0 h-16 border-b z-50 bg-white shadow-lg shadow-black/5">
      <div className="container mx-auto relative px-3 md:px-5 items-center flex gap-4">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex h-14 w-28 items-center lg:h-[60px]">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>

          {navLinks?.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-muted-foreground mt-2 transition-colors hover:text-foreground"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden mt-2.5"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <div className="flex h-14 w-28 items-center lg:h-[60px]">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="w-full h-full"
                  />
                </Link>
              </div>

              {navLinks?.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="flex-center gap-1 ml-auto mt-2.5 md:mt-0">
            <Link to="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative"
              >
                <Heart className="h-5 w-5" />
                <span className="absolute top-0 right-0 text-xs font-medium text-white bg-primary rounded-full w-4 aspect-square">
                  {wishlist.length}
                </span>
              </Button>
            </Link>

            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 text-xs font-medium text-white bg-primary rounded-full w-4 aspect-square">
                  {cart.length}
                </span>
              </Button>
            </Link>

            {authUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="cursor-pointer ml-1">
                    {authUser?.profilePic ||
                    authUser?.profilePic?.secure_url ? (
                      <img
                        src={
                          authUser?.profilePic?.secure_url ||
                          authUser?.profilePic
                        }
                        alt="user"
                        className="w-9 aspect-square rounded-full"
                      />
                    ) : (
                      <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full"
                      >
                        <UserRound className="size-6" />
                      </Button>
                    )}
                    <span className="sr-only">Toggle user menu</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {authUser?.isAdmin && (
                    <Link to="/admin">
                      <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    </Link>
                  )}
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <Button
                    onClick={handleLogout}
                    size="sm"
                    variant="ghost"
                    className="w-full pl-0"
                    isLoading={isLogouting}
                  >
                    <DropdownMenuItem className="w-full">
                      Logout
                    </DropdownMenuItem>
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/auth/login">
                  <Button variant="secondary" className="px-6 py-3">
                    Login
                  </Button>
                </Link>
                <Link to="/auth/register">
                  <Button className="px-6 py-3">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
