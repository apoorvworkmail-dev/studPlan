function AddTask({
    task,
    setTask,
    addTask,
}) {
    return (
        
        <div
            style={{
                display: "flex",
                gap: "10px",
                marginBottom: "20px",
            }}
        >
            <input
                type="text"
                value={task}
                placeholder = "Enter task"
                onChange={(e) => setTask(e.target.value)
                }
            />

            <button onClick={addTask}>
                Add Task
            </button>
        </div>
    );
}

export default AddTask;
