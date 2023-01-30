import express from "express";
import { userController, studentController } from "../controllers/index.js";
const router = express.Router(); //gọi hàm khởi tạo đối tượng routers
router.get("/", studentController.getAllStudents);
//get student by id
router.get("/:id", studentController.getStudentById);

//put:tìm đối tượng cần update ko tìm thấy thì không làm gì cả
//patch: không tìm thấy đối tượng update tự động tạo mới

router.post("/insert", studentController.insertStudent);

router.patch("/", studentController.updateStudent);

router.put("/", studentController.updateStudent);

export default router;
