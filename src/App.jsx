import {useState,useEffect } from 'react';
import AddTask from "./components/AddTask";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";

function App()
{
  const [task,setTask] = useState("");
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if(savedTasks)
    {
      setTasks(JSON.parse(savedTasks));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks)
  );
  },[tasks]);

  const addTask = () => {
    if(!task.trim()) return;
    
    const newTask = {
      id: Date.now(),title: task, completed: false,

    };

    setTasks([...tasks,newTask]);
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
        if(task.id === id)
        {
          return {...task,completed: !task.completed,
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


    return (
  <div>
    <h1>📚 Study Planner</h1>

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

    <TaskList
      tasks={tasks}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
    />
  </div>
);
}

export default App;