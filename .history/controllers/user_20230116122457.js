import { body, param, validationResult } from "express-validator";
import { studentRepository, userRepository } from "../repositories/index.js";
import { EventEmitter } from "node:events";

const myEvent = new EventEmitter();
// listen
myEvent.on("evet.register.user", (params) => {
  console.log(`They taked about:  + ${JSON.stringify(params)}`);
});

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  // await dòng 11 chạy xong mới đến dòng 20
  await userRepository.login({ email, password });
  res.status(200).json({
    message: "Login user successfully",
    date: "detail user hear...",
  });
};

const register = async (req, res) => {
  //destrucuring
  const { name, email, password, phoneNumber, address } = req.body;
  await userRepository.register({
    password,
    name,
    email,
    phoneNumber,
    address,
  });
  //Event Emitter
  myEvent.emit("evet.register.user", { email, phoneNumber });
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
