import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadImageToCloudinary = async (filePath, folderName) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folderName,
    });

    // Delete image from server
    try {
      fs.unlinkSync(filePath);
    } catch (error) {
      console.error("Failed to delete image from server", error);
      throw new Error("Failed to delete image from server");
    }

    return {
      secure_url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Failed to upload image to Cloudinary", error);
    throw new Error(`Failed to upload image to Cloudinary: ${error.message}`);
  }
};

export default uploadImageToCloudinary;