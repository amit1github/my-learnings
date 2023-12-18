import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import chalk from "chalk";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/todo-task");

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: true,
  },
});

const Todo = mongoose.model("todo", todoSchema);

app.get("/", async (req, res) => {
  res.send("hello world!");
});

app.post("/create-task", async (req, res) => {
  try {
    const { task } = req.body;

    const data = new Todo({ task });
    await data.save();
    return res
      .status(201)
      .json({
        status: true,
        message: "Task created successfully",
        response: data,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ status: false, message: "Failed to create task" });
  }
});

app.listen(port, () => {
  console.log(chalk.bold.underline.cyan(`Server is running on port ${port}`));
});
