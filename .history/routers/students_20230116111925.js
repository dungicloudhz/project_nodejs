import express from "express";
import { userController, studentController } from "../controllers/index.js";
const router = express.Router(); //gọi hàm khởi tạo đối tượng routers
router.get("/", (req, res) => {
  res.send("GET students");
});
//get student by id
router.get("/:id", (req, res) => {
  // debugger;
  res.send("GET detail student by id:" + req?.params?.id ?? "");
});

//put:tìm đối tượng cần update ko tìm thấy thì không làm gì cả
//patch: không tìm thấy đối tượng update tự động tạo mới

router.post("/insert", (req, res) => {
  res.send("POST insert students");
});

router.patch("/", (req, res) => {
  res.send("PATCH(create new object if not exists) insert students");
});

router.put("/", (req, res) => {
  res.send("POST insert students");
});

export default router;
