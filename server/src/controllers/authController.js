export const register = (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    console.log(error);
  }
};
