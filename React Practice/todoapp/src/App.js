import './App.css';
import { useState } from 'react';
import { Trash2 } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")


  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };
  const toggleTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="mb-4">To-Do List</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>Add</button>
        </div>
        <ul className="list-group">
          {tasks.map((t, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTask(index)}
                />
                <label className={t.completed ? "text-decoration-line-through text-muted ms-2" : "ms-2"}>
                  {t.text}
                </label>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
