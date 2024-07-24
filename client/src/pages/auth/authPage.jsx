import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAuthMutation } from "../../store/api/authApiSlice";
import { addUser } from "../../store/slices/authSlice";
import toast from "react-hot-toast";

const AuthPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [handleAuth, { isError, error, isLoading }] = useAuthMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await handleAuth({
        path,
        user,
      }).unwrap();

      navigate("/");
      dispatch(addUser(res.user));
      toast.success(res?.message);

      console.log(res);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="w-full lg:grid min-h-screen lg:min-h-dvh lg:grid-cols-2">
      <div className="flex items-center w-full h-screen justify-center px-3">
        <div className="mx-auto grid max-w-md w-full gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">
              {path === "register" ? "Register Yourself" : "Login"}
            </h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to{" "}
              {path === "register" ? "register" : "login"} to your account
            </p>
          </div>

          <div className="grid gap-5">
            {path === "register" && (
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  disabled={isLoading}
                  placeholder="Enter your name"
                  required
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                disabled={isLoading}
                placeholder="Enter your email"
                required
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                name="password"
                disabled={isLoading}
                required
                value={user.password}
                onChange={handleChange}
              />

              {path !== "register" && (
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              )}
            </div>

            {isError && (
              <p className="text-red-500 text-sm -my-2 font-medium">
                {error?.data?.message}
              </p>
            )}

            <Button
              disabled={
                !user.email ||
                !user.password ||
                (path === "register" && !user.name) ||
                isLoading
              }
              isLoading={isLoading}
              onClick={handleSubmit}
              type="submit"
              className="w-full"
            >
              {path === "register" ? "Register" : "Login"}
            </Button>

            <div className="flex-center w-full overflow-hidden gap-5">
              <Separator />
              <span className="text-sm text-muted-foreground">OR</span>
              <Separator />
            </div>

            <Button variant="outline" className="w-full flex-center gap-2">
              <img
                src="/icons/google.png"
                alt="google"
                className="w-5 aspect-square"
              />
              <span>Continue with Google</span>
            </Button>
          </div>

          <div className="mt-1 text-center text-sm">
            {path !== "register" ? "Don't" : "Already"} have an account?{" "}
            <Link
              to={`/auth/${path === "register" ? "login" : "register"}`}
              className="underline"
            >
              {path === "register" ? "Login" : "Register"}
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden bg-muted lg:block">
        <img
          src="/images/auth.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover object-right-bottom overlay dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default AuthPage;
