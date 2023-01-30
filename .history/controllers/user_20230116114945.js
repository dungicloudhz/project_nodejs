import { body, validationResult } from "express-validator";

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  res.status(200).json({
    message: "Login user successfully",
  });
};

const register = async (req, res) => {
  res.send("POST register users");
};

const getDetailUser = async (req, res) => {};

export default {
  login,
  register,
  getDetailUser,
};
