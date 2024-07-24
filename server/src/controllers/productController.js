export const addNewProduct = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    next(error);
  }
};
