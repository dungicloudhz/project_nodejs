import express from "express";
import * as dotenv from "dotenv";
// import { usersRouter, studentsRouter } from "./routers/index.js";
import { usersRouter, studentsRouter } from "./routers/index.js";
//send test request => postman
dotenv.config();
const app = express();
// const PORT = process.en;
app.use(express.json()); //cho phép đọc body cuar đối tượng request
const port = process.env.PORT || 3000;

app.use("/users", usersRouter);
app.use("/students", studentsRouter);

app.get("/", (req, res) => {
  res.send("response from root router, haha!");
});

app.listen(port, async () => {
  console.log(`listening on port : ${port}`);
});
// import { sum, multiply, substract } from "./caculations.js";
// var name = "Dung 2023";
// console.log(name);

// console.log(`1 + 2 =${sum(1, 2)}`);
// console.log(`2 * 2 =${multiply(2, 2)}`);
// console.log(`5 - 2 =${substract(5, 2)}`);
// //1file là 1 module
