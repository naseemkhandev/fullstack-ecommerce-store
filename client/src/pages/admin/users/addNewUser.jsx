/* eslint-disable react-hooks/exhaustive-deps */
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SlCloudUpload } from "react-icons/sl";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import useHandleImageChange from "../../../hooks/useHandleImageChange";
import {
  useAddNewUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "../../../store/api/userApiSlice";

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

  const { handleImageChange } = useHandleImageChange(
    "profilePic",
    userData,
    setUserData
  );

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
          {userData?.profilePic ? (
            <div className="w-full h-[30rem] relative bg-gray-100">
              <img
                src={userData.profilePic}
                alt="profilePic"
                className="object-cover md:object-contain h-full w-full object-top rounded-lg mx-auto"
              />
              <button
                onClick={() => setUserData({ ...userData, profilePic: "" })}
                className="bg-white text-primary absolute top-3 right-3 p-1.5 rounded-md"
              >
                <Trash2 className="w-5" />
              </button>
            </div>
          ) : (
            <div className="relative w-full h-[30rem] text-center flex flex-col items-center justify-center gap-1 rounded-xl border-gray-200 px-10 lg:px-7 xl:px-10 border-dashed border-2 hover:border-[#5BAE8F] hover:bg-[#5BAE8F]/10 group">
              <input
                type="file"
                className="absolute top-0 z-10 left-0 w-full h-full opacity-0 cursor-pointer"
                name="profilePic"
                id="profilePic"
                accept="image/*"
                onChange={handleImageChange}
              />

              <SlCloudUpload className="size-14 stroke-[0.01px] text-gray-300 mb-3 group-hover:text-primary" />
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

          <Input
            placeholder="Your role"
            type="text"
            name="role"
            value={userData.role}
            disabled={true}
            className="cursor-not-allowed disabled:opacity-90 disabled:select-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label className="font-medium text-gray-500">Status</Label>
          <Input
            placeholder="Your status"
            type="text"
            name="isVerified"
            value={userData.isVerified ? "Verified" : "Not Verified"}
            disabled={true}
            className="cursor-not-allowed disabled:opacity-90 disabled:select-none"
          />
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
