export const register = (req, res) => {
  try {
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.log(error);
  }
};
