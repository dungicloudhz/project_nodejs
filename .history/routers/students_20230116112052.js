import express from "express";
import { userController, studentController } from "../controllers/index.js";
const router = express.Router(); //gọi hàm khởi tạo đối tượng routers
router.get("/", studentController.getAllStudents);
//get student by id
router.get("/:id", studentController.getStudentById);

//put:tìm đối tượng cần update ko tìm thấy thì không làm gì cả
//patch: không tìm thấy đối tượng update tự động tạo mới

router.post("/insert", studentController);

router.patch("/", (req, res) => {
  res.send("PATCH(create new object if not exists) insert students");
});

router.put("/", (req, res) => {
  res.send("POST insert students");
});

export default router;
