import { useState, useEffect } from 'react';
import AddTask from "./components/AddTask";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");


  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) {
      alert("Please enter a subject name.");
      return;
    }

    if (task.trim().length > 15) {
      alert("Subject name cannot exceed 15 characters.");
      return;
    }


    const isDuplicate = tasks.some(
      (item) =>
        item.title.toLowerCase().trim() === task.toLowerCase().trim()
    );

    if (isDuplicate) {
      alert("Subject already exist! PLease enter a new subject.");
      return;
    }

    const newTask = {
      id: Date.now(), title: task, completed: false,

    };


    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  };


  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task, completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);

  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.length - completedTasks;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }




    if (filter === "pending")
      return !task.completed;

    return true;
  });

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        📚 Study Planner
      </h1>

      <AddTask
        task={task}
        setTask={setTask}
        addTask={addTask}
      />

      <Dashboard
        total={tasks.length}
        completed={completedTasks}
        pending={pendingTasks}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            padding: "8px 16px",
            cursor: "pointer",
          }}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;