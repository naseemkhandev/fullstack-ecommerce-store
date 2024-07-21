export const register = (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields!" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long!" });
    }
    if (password.length > 20) {
      return res
        .status(400)
        .json({ message: "Password must be at most 20 characters long!" });
    }

    if (!email.includes("@")) {
      return res.status(400).json({ message: "Invalid email address!" });
    }

    if (name.length < 3) {
      return res.status(400).json({ message: "Invalid email address!" });
    }

    if (name.length > 20) {
      return res
        .status(400)
        .json({ message: "Name must be at most 20 characters long!" });
    }

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.log(error);
  }
};
