export const addNewCategory = async (req, res) => {
  try {
    res.status(200).json({ message: "Category added successfully" });
  } catch (error) {
    next(error);
  }
};
