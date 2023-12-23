const express = require("express");
const router = express.Router();
require("../DB/conn");
const Todo = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from server auth.js");
});

router.post("/register", async (req, res) => {
  console.log(req.body.title);
  console.log(req.body.desc);
  //   res.json({ message: req.body });
  const title = req.body.title;
  const desc = req.body.desc;
  const todo = new Todo({ title, desc });

  todo
    .save()
    .then(() => {
      res.status(201).json({ message: "Todo added successfully" });
    })
    .catch((err) => res.status(500).json({ message: "Failed to add" }));
});

router.get("/show", function (req, res) {
  Todo.find({}, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/del/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true, msg: "Product Deleted" });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
