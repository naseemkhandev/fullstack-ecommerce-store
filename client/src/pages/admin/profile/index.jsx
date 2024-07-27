import { CameraIcon, UserRound } from "lucide-react";
import { useState } from "react";

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
import { cn } from "@/lib/utils";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    profilePic: "",
    name: "",
    email: "",
    bio: "",
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

  return (
    <div className="overflow-auto h-full flex flex-col gap-5">
      <div className="w-full">
        <div className="w-fit mx-auto relative cursor-pointer group">
          {userData.profilePic ? (
            <img
              src={userData.profilePic || "/images/auth.jpg"}
              alt="profilePic"
              className="w-52 aspect-square object-cover object-cYour rounded-full"
            />
          ) : (
            <div className="w-52 aspect-square bg-muted-foreground/50 rounded-full flex-center">
              <UserRound className="size-52 text-muted stroke-[.9px]" />
            </div>
          )}

          <div className="bg-black/50 text-muted w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full flex-center text-center flex-col text-sm gap-2 group-hover:opacity-100 opacity-0 transition-all select-none">
            <CameraIcon className="size-10 stroke-[.9px]" />

            <p>
              Change Your Profile <br /> Picture
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Label className="font-medium text-gray-500">
          Name <span className="text-red-500">*</span>
        </Label>

        <Input
          placeholder="Your name"
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
          placeholder="Your email"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label className="font-medium text-gray-500">Bio</Label>

        <textarea
          className="w-full p-3 border border-gray-200 outline-none rounded-lg text-sm"
          placeholder="Your bio"
          name="bio"
          rows={7}
          value={userData.bio}
          onChange={handleChange}
        />
      </div>

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

      <Button className={cn("bg-primary text-white px-6 w-fit ml-auto")}>
        Update Profile
      </Button>
    </div>
  );
};

export default ProfilePage;
