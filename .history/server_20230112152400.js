import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.en;

app.listen(process.env.PORT || 3000, async(req, res));
// import { sum, multiply, substract } from "./caculations.js";
// var name = "Dung 2023";
// console.log(name);

// console.log(`1 + 2 =${sum(1, 2)}`);
// console.log(`2 * 2 =${multiply(2, 2)}`);
// console.log(`5 - 2 =${substract(5, 2)}`);
// //1file là 1 module
