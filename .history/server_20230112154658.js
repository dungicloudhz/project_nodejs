import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
// const PORT = process.en;
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("response from root router, haha, oke1!");
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
