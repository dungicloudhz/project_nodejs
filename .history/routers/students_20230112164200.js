import express from "express";
const router = express.Router(); //gọi hàm khởi tạo đối tượng routers
router.get("/", (req, res) => {
  res.send("GET students");
});
//get student by id
router.get("/:id", (req, res) => {
  // debugger;
  res.send("GET detail student by id:" + req?.params?.id ?? "");
});

//put or patch: không tìm thấy đối tượng tự động tạo mới

router.post("/insert", (req, res) => {
  res.send("POST insert students");
});

export default router;
