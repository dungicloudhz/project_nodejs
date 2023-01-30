import { body, validationResult } from "express-validator";
import { studentRepository, userRepository } from "../repositories/index.js";

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  userRepository.login({ email, password });
  res.status(200).json({
    message: "Login user successfully",
    date: "detail user hear...",
  });
};

const register = async (req, res) => {
  res.status(201).json({
    message: "Register user successfully",
  });
};

const getDetailUser = async (req, res) => {};

export default {
  login,
  register,
  getDetailUser,
};
