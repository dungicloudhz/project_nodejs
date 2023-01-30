import express from "express";
import { body, validationResult } from "express-validator";
const router = express.Router(); //gọi hàm khởi tạo đối tượng routers
router.get("/", (req, res) => {
  res.send("GET users");
});

router.post("/login",
  //user , password
  body('username').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),

  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      const { email, password } = req.body;
      res.send("POST login users");
    }

  // validation
  debugger;
);

router.post("/register", (req, res) => {
  res.send("POST register users");
});

export default router;
