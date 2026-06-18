function TaskList({
  tasks,
  toggleComplete,
  deleteTask
}) {

    if (tasks.length === 0) {
  return <p>No tasks found.</p>;
    }

    
  return (
    <ul>
      {tasks.map((item) => (
        <li
          key={item.id}
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              textDecoration:
                item.completed
                  ? "line-through"
                  : "none",
            }}
          >
            {item.title}
          </span>

          <div>
            <button
              onClick={() =>
                toggleComplete(item.id)
              }
            >
              {item.completed
                ? "Undo"
                : "Complete"}
            </button>

            <button
              onClick={() =>
                deleteTask(item.id)
              }
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;