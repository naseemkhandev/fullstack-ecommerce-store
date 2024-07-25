export const addNewProduct = async (req, res, next) => {
  try {
    const { _id } = req.user;
    console.log(_id);

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    next(error);
  }
};
