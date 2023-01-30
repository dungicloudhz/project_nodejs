import express from "express";
const router = express.Router(); //gọi hàm khởi tạo đối tượng routers
router.get("/", (req, res) => {
  res.send("GET students");
});
//get student by id
router.get("/:id", (req, res) => {
  res.send("GET login students");
});

router.post("/insert", (req, res) => {
  res.send("POST insert students");
});

export default router;
