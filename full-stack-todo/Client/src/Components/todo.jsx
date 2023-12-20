import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoApp = () => {
  // const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editableId, setEditableId] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [editedStatus, setEditedStatus] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [editedDeadline, setEditedDeadline] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/task");
      setTodoList(response.data.task);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const toggleEditable = (id) => {};

  const addTask = (e) => {};

  const savedEditedTask = (e) => {};

  const deleteTask = (id) => {};

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <h2 className="text-center"> Todo List</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value
                      onChange
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value
                      onChange
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value
                      onChange
                    />
                  </td>
                  <td>
                    <input
                      type="datetime-local"
                      className="form-control"
                      value
                      onChange
                    />
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm" onClick>
                      Save
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm ml-1" onClick>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td colSpan="4">Loading Products...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-5">
          <h2 className="text-center">Add task</h2>
          <form className="bg-light p-4">
            <div className="mb-3">
              <label>Task</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Task"
                onChange
              />
            </div>
            <div className="mb-3">
              <label>Status</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Status"
                onChange
              />
            </div>
            <div className="mb-3">
              <label>Deadline</label>
              <input className="form-control" type="datetime-local" onChange />
            </div>
            <button onClick className="btn btn-success btn-sm">
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
