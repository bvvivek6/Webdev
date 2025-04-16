import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!taskInput.trim()) return;

    if (editId !== null) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editId ? { ...task, name: taskInput } : task
        )
      );
      setEditId(null);
    } else {
      setTasks([
        ...tasks,
        { id: Date.now(), name: taskInput, completed: false },
      ]);
    }
    setTaskInput("");
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEdit = (task) => {
    setTaskInput(task.name);
    setEditId(task.id);
  };

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Task Manager
      </h1>

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter your task..."
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={handleAddOrUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded border"
          >
            <span
              onClick={() => handleToggle(task.id)}
              className={`flex-1 cursor-pointer ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.name}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(task)}
                className="text-sm text-yellow-500 hover:text-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
