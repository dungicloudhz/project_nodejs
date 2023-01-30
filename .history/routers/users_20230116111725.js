import express from "express";
import { body, validationResult } from "express-validator";
import { userController, studentController } from "../controllers/index.js";
const router = express.Router(); //gọi hàm khởi tạo đối tượng routers
router.get("/", (req, res) => {
  res.send("GET users");
});

router.post(
  "/login",
  //user , password
  body("email").isEmail(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 5 })
);

router.post("/register", (req, res) => {});

export default router;
