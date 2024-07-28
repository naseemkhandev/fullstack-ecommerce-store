/* eslint-disable react-hooks/exhaustive-deps */
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { SlCloudUpload } from "react-icons/sl";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useAddNewUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "../../../store/api/userApiSlice";
import { cn } from "@/lib/utils";

const AddNewUserPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();

  const { data: { user: userToUpdate } = {}, isLoading: isFetchingUser } =
    useGetUserByIdQuery(id);
  const [addNewUser, { isLoading: isAddingUser }] = useAddNewUserMutation();
  const [updateUser, { isLoading: isUpdatingUser }] = useUpdateUserMutation();

  const [userData, setUserData] = useState({
    profilePic: "",
    name: "",
    email: "",
    password: "",
    role: "" || "user",
    isVerified: "" || false,
  });

  console.log(userData);

  useEffect(() => {
    if (pathname.includes("update") && userToUpdate) {
      setUserData({
        ...userData,
        _id: userToUpdate._id,
        name: userToUpdate.name,
        email: userToUpdate.email,
        role: userToUpdate.role,
        isVerified: userToUpdate.isVerified,
        profilePic: userToUpdate.profilePic,
      });
    }
  }, [userToUpdate, id, pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleAddNewUser = async (e) => {
    e.preventDefault();

    const loading = toast.loading("Adding new user...");
    try {
      const res = await addNewUser(userData).unwrap();
      navigate("/admin/users");
      toast.success(res?.message);
    } catch (error) {
      toast.error(error.data.message || "An error occurred");
    } finally {
      toast.dismiss(loading);
    }
  };

  const handleUpdateUser = async () => {
    const loading = toast.loading("Updating user...");
    try {
      if (
        userData.name !== userToUpdate.name ||
        userData.email !== userToUpdate.email ||
        userData.role !== userToUpdate.role ||
        userData.isVerified !== userToUpdate.isVerified ||
        userData.profilePic !== userToUpdate.profilePic
      ) {
        const res = await updateUser(userData).unwrap();

        navigate("/admin/users");
        toast.success(res?.message);
      } else {
        toast.error("You haven't made any changes");
        navigate("/admin/users");
      }
    } catch (error) {
      toast.error(error.data.message || "An error occurred");
    } finally {
      toast.dismiss(loading);
    }
  };

  return (
    <form
      encType="multipart/form-data"
      className="overflow-auto h-full flex flex-col gap-5"
    >
      <div className="flex flex-col gap-3">
        <Label className="font-medium text-gray-500">Profile Picture</Label>

        <div className="relative">
          <input
            type="file"
            className="absolute top-0 z-10 left-0 w-full h-full opacity-0 cursor-pointer"
            name="profilePic"
            id="profilePic"
            onChange={(e) => {
              handleChange({
                target: {
                  name: "profilePic",
                  value: e.target.files[0],
                },
              });
            }}
          />

          {userData?.profilePic?.secure_url ? (
            <div className="w-full h-[18rem] relative">
              <img
                src={userData.profilePic?.secure_url}
                alt="profilePic"
                className="w-full h-full object-cover object-top rounded-lg"
              />
              <button
                onClick={() => setUserData({ ...userData, profilePic: "" })}
                className="bg-white text-primary absolute top-3 right-3 p-1.5 rounded-md"
              >
                <Trash2 className="w-5" />
              </button>
            </div>
          ) : (
            <div className="relative w-full h-[18rem] text-center flex flex-col items-center justify-center gap-1 rounded-lg border-gray-200 px-10 lg:px-7 xl:px-10 border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 group">
              <SlCloudUpload className="size-14 stroke-[0.01px] text-gray-300 mb-3 group-hover:text-primary/80" />
              <h4 className="font-medium text-lg text-gray-500">
                Drag & drop files or{" "}
                <span className="text-primary underline">Browse</span>
              </h4>
              <p className="text-primary text-sm">
                Supported formates: JPEG, PNG, JPEG
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Label className="font-medium text-gray-500">
          Name <span className="text-red-500">*</span>
        </Label>

        <Input
          placeholder="Enter name"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label className="font-medium text-gray-500">
          Email <span className="text-red-500">*</span>
        </Label>

        <Input
          placeholder="Enter email"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>

      {!pathname.includes("update") && (
        <div className="flex flex-col gap-3">
          <Label className="font-medium text-gray-500">
            Password <span className="text-red-500">*</span>
          </Label>

          <Input
            placeholder="Enter password"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <Label className="font-medium text-gray-500">Role</Label>

          <Select value={userData.role} onChange={handleChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select role" value={userData.role} />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="user">User</SelectItem>
                <SelectItem
                  value="admin"
                  disabled={true}
                  className="cursor-not-allowed"
                >
                  Admin
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-3">
          <Label className="font-medium text-gray-500">Status</Label>

          <Select value={userData.isVerified} onChange={handleChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value={true}
                  disabled={true}
                  className="cursor-not-allowed"
                >
                  Verified
                </SelectItem>
                <SelectItem value={false}>Unverified</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pb-3">
        <Link to="/admin/users">
          <Button variant="outline" className="px-7 py-3.5">
            Cancel
          </Button>
        </Link>

        {pathname.includes("update") ? (
          <Button
            onClick={handleUpdateUser}
            isLoading={isAddingUser || isFetchingUser || isUpdatingUser}
            disabled={isFetchingUser || isUpdatingUser}
            className={cn("bg-primary text-white px-6 py-3.5", {
              "px-5": isAddingUser,
            })}
          >
            Update User
          </Button>
        ) : (
          <Button
            onClick={handleAddNewUser}
            isLoading={isAddingUser}
            className={cn("bg-primary text-white px-6 py-3.5", {
              "px-5": isAddingUser,
            })}
          >
            Add New User
          </Button>
        )}
      </div>
    </form>
  );
};

export default AddNewUserPage;
