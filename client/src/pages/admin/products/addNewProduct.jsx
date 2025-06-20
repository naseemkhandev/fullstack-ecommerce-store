import { Loader2, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { SlCloudUpload } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

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
import { Skeleton } from "@/components/ui/skeleton";

import useHandleImageChange from "../../../hooks/useHandleImageChange";
import { useGetAllCategoriesQuery } from "../../../store/api/categoryApiSlice";
import { useAddNewProductMutation } from "../../../store/api/productApiSlice";
import generateSlug from "../../../utils/generateSlug";

const AddNewProductPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    image: "",
    title: "",
    description: "",
    actualPrice: "",
    discountedPrice: "",
    category: "",
    stock: "",
    status: "active",
    slug: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
      slug: name === "title" ? generateSlug(value) : prevData.slug,
    }));
  };

  const { handleImageChange } = useHandleImageChange(
    "image",
    userData,
    setUserData
  );

  const { data: { categories } = [], isLoading: isCategoriesLoading } =
    useGetAllCategoriesQuery();

  const [addNewProduct, { isLoading: isAddingProduct }] =
    useAddNewProductMutation();

  const handleAddNewProduct = async () => {
    const loading = toast.loading("Adding product...");

    try {
      const productData = { ...userData, status: "active" };

      await addNewProduct(productData).unwrap();
      toast.success("Product added successfully");
      navigate("/admin/products");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    } finally {
      toast.dismiss(loading);
    }
  };

  const handleAddNewProductToDraft = async () => {
    const loading = toast.loading("Adding product...");

    try {
      const productData = { ...userData, status: "draft" };

      await addNewProduct(productData).unwrap();
      toast.success("Product added in draft successfully");
      navigate("/admin/products");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred");
    } finally {
      toast.dismiss(loading);
    }
  };

  useEffect(() => {
    if (categories?.length > 0 && userData?.category) {
      const selectedCategory = categories?.find(
        (category) => category._id === userData.category
      );
      if (selectedCategory) {
        setUserData((prevData) => ({
          ...prevData,
          category: selectedCategory._id,
        }));
      }
    }
  }, [categories, userData.category]);

  return (
    <form
      encType="multipart/form-data"
      className="overflow-auto h-full flex flex-col gap-5"
    >
      <div className="flex flex-col gap-3">
        <Label className="font-medium text-gray-500">
          Image <span className="text-red-500">*</span>
        </Label>

        {userData.image ? (
          <div className="w-full h-[30rem] relative">
            <img
              src={userData.image}
              alt="image"
              className="w-full h-full object-cover object-center rounded-lg"
            />
            <button
              type="button"
              className="bg-white text-primary absolute top-3 right-3 p-1.5 rounded-md"
              onClick={() => setUserData({ ...userData, image: "" })}
            >
              <Trash2 className="w-5" />
            </button>
          </div>
        ) : (
          <div className="relative w-full h-[30rem] text-center flex flex-col items-center justify-center gap-1 rounded-xl border-gray-200 px-10 lg:px-7 xl:px-10 border-dashed border-2 hover:border-[#5BAE8F] hover:bg-[#5BAE8F]/10 group">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="absolute w-full z-10 h-full opacity-0 top-0 left-0 cursor-pointer"
              onChange={handleImageChange}
            />
            <SlCloudUpload className="size-14 stroke-[0.01px] text-gray-300 mb-3 group-hover:text-[#5BAE8F]/80" />
            <h4 className="font-medium text-lg text-gray-500">
              Drag & drop files or{" "}
              <span className="text-primary underline">Browse</span>
            </h4>
            <p className="text-primary text-sm">
              Supported formats: JPEG, PNG, JPEG
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
          name="title"
          value={userData.title}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          value={userData.slug}
          placeholder="Your slug will be generated automatically"
          disabled
          className="disabled:bg-muted-foreground/10"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label className="font-medium text-gray-500">
          Description <span className="text-red-500">*</span>
        </Label>

        <textarea
          className="w-full p-3 border border-gray-200 outline-none rounded-lg text-sm"
          placeholder="Enter description"
          name="description"
          rows={7}
          value={userData.description}
          onChange={handleChange}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <Label className="font-medium text-gray-500">
            Actual Price <span className="text-red-500">*</span>
          </Label>

          <Input
            placeholder="Enter Actual Price"
            type="number"
            name="actualPrice"
            value={userData.actualPrice}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label className="font-medium text-gray-500">
            Discounted Price <span className="text-red-500">*</span>
          </Label>

          <Input
            placeholder="Enter Discounted Price"
            type="number"
            name="discountedPrice"
            value={userData.discountedPrice}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <Label className="font-medium text-gray-500">
            Stock <span className="text-red-500">*</span>
          </Label>

          <Input
            placeholder="Enter stock"
            type="number"
            name="stock"
            value={userData.stock}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label className="font-medium text-gray-500">
            Category <span className="text-red-500">*</span>
          </Label>

          <Select
            onValueChange={(value) =>
              setUserData({ ...userData, category: value })
            }
          >
            <SelectTrigger className="w-full capitalize">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {isCategoriesLoading ? (
                  <Skeleton className="h-11 flex-center gap-2 select-none text-muted-foreground bg-muted">
                    <Loader2 className="animate-spin size-5" />
                    Loading categories...
                  </Skeleton>
                ) : (
                  <>
                    {categories?.map((category) => (
                      <SelectItem
                        key={category._id}
                        value={category._id}
                        className="capitalize"
                      >
                        <span>{category.name}</span>
                      </SelectItem>
                    ))}
                  </>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pb-3">
        <Button
          type="submit"
          isLoading={isAddingProduct}
          onClick={handleAddNewProductToDraft}
          variant="outline"
          className="px-7 py-3.5"
        >
          Save as Draft
        </Button>
        <Button
          type="submit"
          isLoading={isAddingProduct}
          onClick={handleAddNewProduct}
          className="bg-primary text-white px-7 py-3.5"
        >
          Add Product
        </Button>
      </div>
    </form>
  );
};

export default AddNewProductPage;
