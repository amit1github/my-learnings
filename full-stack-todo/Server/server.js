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
  res.send("Hello developer! API is working.");
});

app.get("/task", async (req, res) => {
  try {
    const data = await Todo.find();
    return res.status(201).json({
      status: true,
      message: "All task fetched successfully",
      response: data,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ status: false, message: "Failed to fetched task" });
  }
});

app.get("/task/:id", async (req, res) => {
  try {
    const taskID = req.params.id;
    const specificTask = await Todo.findById(taskID);
    return res.status(201).json({
      status: true,
      message: "All task fetched successfully",
      response: specificTask,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ status: false, message: "Failed to fetched task by ID" });
  }
});

app.post("/create-task", async (req, res) => {
  try {
    const { task } = req.body;

    const data = new Todo({ task });
    await data.save();
    return res.status(201).json({
      status: true,
      message: "Task created successfully",
      response: data,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ status: false, message: "Failed to create task" });
  }
});

app.put("/update-task/:id", async (req, res) => {
  try {
    const taskID = req.params.id;
    const { task, completed } = req.body;
    const existingTask = await Todo.findById(taskID);

    if (task) {
      existingTask.task = task;
    }

    if (completed !== undefined) {
      existingTask.completed = completed;
    }

    await existingTask.save();
    return res.status(200).json({
      status: true,
      message: "Task updated successfully",
      response: existingTask,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ status: false, message: "Failed to Update task" });
  }
});

app.delete("/delete-task/:id", async (req, res) => {
  try {
    const taskID = req.params.id;
    const data = await Todo.findByIdAndDelete(taskID);
    return res.status(201).json({
      status: true,
      message: "Task deleted successfully",
      response: data,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ status: false, message: "Failed to delete task" });
  }
});

app.listen(port, () => {
  console.log(chalk.bold.underline.cyan(`Server is running on port ${port}`));
});
