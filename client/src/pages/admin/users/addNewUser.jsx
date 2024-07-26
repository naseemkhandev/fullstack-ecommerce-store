import { Trash2 } from "lucide-react";
import { useState } from "react";
import { SlCloudUpload } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
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
import { useAddNewUserMutation } from "../../../store/api/userApiSlice";
import { cn } from "@/lib/utils";

const AddNewUserPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    profilePic: "",
    name: "",
    email: "",
    password: "",
    role: "" || "user",
    isVerified: "" || false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const [addNewUser, { isLoading: isAddingUser }] = useAddNewUserMutation();

  const handleAddNewUser = async (e) => {
    e.preventDefault();

    const loading = toast.loading("Adding user...");
    try {
      const res = await addNewUser(userData).unwrap();

      navigate("/admin/users");
      toast.success(res?.message);
    } catch (error) {
      toast.error(error.data.message);
    } finally {
      toast.dismiss(loading);
    }
  };

  return (
    <div className="overflow-auto h-full flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <Label className="font-medium text-gray-500">
          profilePic <span className="text-red-500">*</span>
        </Label>

        {userData.profilePic ? (
          <div className="w-full h-[18rem] relative">
            <img
              src={userData.profilePic}
              alt="profilePic"
              className="w-full h-full object-cover object-center rounded-lg"
            />
            <button className="bg-white text-primary absolute top-3 right-3 p-1.5 rounded-md">
              <Trash2 className="w-5" />
            </button>
          </div>
        ) : (
          <div className="relative w-full h-[18rem] text-center flex flex-col items-center justify-center gap-1 rounded-lg border-gray-200 px-10 lg:px-7 xl:px-10 border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 group">
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              accept="image/png, image/jpg, image/jpeg"
              className="absolute w-full z-10 h-full opacity-0 top-0 left-0 cursor-pointer"
              //   onChange={handleprofilePicChange}
            />
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

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <Label className="font-medium text-gray-500">
            Role <span className="text-red-500">*</span>
          </Label>

          <Select>
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

          <Select>
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

        <Button
          onClick={handleAddNewUser}
          isLoading={isAddingUser}
          className={cn("bg-primary text-white px-7 py-3.5", {
            "px-5": isAddingUser,
          })}
        >
          Add User
        </Button>
      </div>
    </div>
  );
};

export default AddNewUserPage;
