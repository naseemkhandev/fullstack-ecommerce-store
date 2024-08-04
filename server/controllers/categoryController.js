import createError from "../helpers/createError.js";
import Category from "../models/categoryModel.js";

export const addNewCategory = async (req, res, next) => {
  try {
    const { name, slug, icon, bgColor } = req.body;

    const isCategoryExist = await Category.findOne({ name });

    if (isCategoryExist)
      return next(createError(400, "Category already exists"));

    const category = await Category.create({
      name,
      slug,
      icon,
      bgColor,
    });

    res.status(200).json({ message: "Category added successfully", category });
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    if (!categories)
      return res
        .status(404)
        .json({ message: "No categories found", categories: [] });

    res.status(200).json({
      message: "Categories found successfully",
      totalCategories: categories.length,
      categories,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, icon, bgColor } = req.body;

    const category = await Category.findById(id);
    if (!category) return next(createError(404, "Category not found"));

    if (category.name !== name) {
      const isCategoryExist = await Category.findOne({ name });
      if (isCategoryExist)
        return next(createError(400, "Category already exists"));
    }

    category.name = name;
    category.slug = slug;
    category.icon = icon;
    category.bgColor = bgColor;
    await category.save();

    res
      .status(200)
      .json({ message: "Category updated successfully", category });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) return next(createError(404, "Category not found"));

    await category.deleteOne();

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    next(error);
  }
};
