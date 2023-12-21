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
  status: {
    type: String,
  },
  deadline: {
    type: Date,
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
      success: true,
      message: "All task fetched successfully",
      response: data,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Failed to fetched task" });
  }
});

app.get("/task/:id", async (req, res) => {
  try {
    const taskID = req.params.id;
    const specificTask = await Todo.findById(taskID);
    return res.status(201).json({
      success: true,
      message: "All task fetched successfully",
      response: specificTask,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Failed to fetched task by ID" });
  }
});

app.post("/create-task", async (req, res) => {
  try {
    const { task, status, deadline } = req.body;

    const data = new Todo(req.body);
    await data.save();
    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      response: data,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Failed to create task" });
  }
});

app.put("/update-task/:id", async (req, res) => {
  try {
    const taskID = req.params.id;
    const { task, status, deadline } = req.body;
    const updatedTask = await Todo.findByIdAndUpdate(taskID, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      response: updatedTask,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({
        success: false,
        message: "Failed to Update task",
        error: error.message,
      });
  }
});

app.delete("/delete-task/:id", async (req, res) => {
  try {
    const taskID = req.params.id;
    const data = await Todo.findByIdAndDelete(taskID);
    return res.status(201).json({
      success: true,
      message: "Task deleted successfully",
      response: data,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Failed to delete task" });
  }
});

app.listen(port, () => {
  console.log(chalk.bold.underline.cyan(`Server is running on port ${port}`));
});
