import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  const [settingsData, setSettingsData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettingsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-5 max-w-lg">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Settings</h2>
        <p className="text-gray-500 text-sm xl:text-base">
          Manage your account settings here to keep your account secure.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="oldPassword">
          Old Password <span className="text-red-500">*</span>
        </Label>

        <Input
          id="oldPassword"
          name="oldPassword"
          placeholder="Enter your old password"
          value={settingsData?.oldPassword}
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
          value={settingsData?.oldPassword}
          onChange={handleChange}
        />
      </div>

      <Button type="submit">Update Password</Button>
    </div>
  );
};

export default SettingsPage;
