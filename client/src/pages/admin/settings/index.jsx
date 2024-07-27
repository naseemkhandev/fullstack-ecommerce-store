import { useState } from "react";
import { toast } from "react-hot-toast";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChangePasswordMutation } from "../../../store/api/authApiSlice";

const SettingsPage = () => {
  const [settingsData, setSettingsData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [changePassword, { isLoading: isUpdatingPassword }] =
    useChangePasswordMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettingsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loading = toast.loading("Updating password...");
    try {
      await changePassword(settingsData).unwrap();
      toast.success("Password updated successfully!");
      setSettingsData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error?.data?.message);
    } finally {
      toast.dismiss(loading);
    }
  };

  return (
    <div className="flex flex-col gap-5 md:max-w-lg">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Settings</h2>
        <p className="text-gray-500 text-sm xl:text-base">
          Manage your account settings here to keep your account secure.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="currentPassword">
          Current Password <span className="text-red-500">*</span>
        </Label>

        <Input
          id="currentPassword"
          name="currentPassword"
          placeholder="Enter your current password"
          value={settingsData?.currentPassword}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="newPassword">
          New Password <span className="text-red-500">*</span>
        </Label>

        <Input
          id="newPassword"
          name="newPassword"
          placeholder="Enter your new password"
          value={settingsData?.newPassword}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="newPassword">
          Confirm Password <span className="text-red-500">*</span>
        </Label>

        <Input
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your new password"
          value={settingsData?.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        onClick={handleSubmit}
        disabled={
          !settingsData.currentPassword ||
          !settingsData.newPassword ||
          !settingsData.confirmPassword
        }
        isLoading={isUpdatingPassword}
      >
        Update Password
      </Button>
    </div>
  );
};

export default SettingsPage;
