import express from "express";
const router = express.Router(); //gọi hàm khởi tạo đối tượng routers
router.get("/", (req, res) => {
  res.send("GET users");
});

router.post("/login", (req, res) => {
  //user , password
  const { email, password } = req.body;
  // validation
  debugger;
  res.send("POST login users");
});

router.post("/register", (req, res) => {
  res.send("POST register users");
});

export default router;
