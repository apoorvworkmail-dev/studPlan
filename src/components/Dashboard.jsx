function Dashboard(
{
    total,
    completed,
    pending
})
{
    return (
        <div
        style = {{
            backgroundColor: "#f0f0f0",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
        }}
    >
        <div>
            <h3>Total</h3>
            <p>{total}</p>
        </div>
        <div>
            <h3>Completed</h3>
            <p>{completed}</p>
        </div>
        <div>
            <h3>Pending</h3>
            <p>{pending}</p>
        </div>
    </div>
    );
}

export default Dashboard;