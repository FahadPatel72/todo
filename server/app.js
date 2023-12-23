const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const hostname = "http://127.0.0.1";
app.use(express.json());

const Todo = require("./model/userSchema");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
require("./DB/conn");

const middleware = (req, res, next) => {
  cosole.log("Hello my middle ware");
  next();
};
// Todo.deleteOne({ title: "a" }, function (err) {
//   if (err) return handleError(err);
// });

app.use(require("./router/auth"));
app.get("/", (req, res) => {
  res.send("hello from server app.js");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${hostname}:${PORT}`);
});
