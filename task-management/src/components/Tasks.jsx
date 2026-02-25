import { useEffect, useState } from "react";
import { getTasks, addTasks, markComplete, deleteTasks } from "../service/taskservice";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleAddTask = async () => {
    if (!newTask) return;
    await addTasks({ title: newTask, completed: false });
    setNewTask("");
    fetchTasks();
  };

  const handleCompleteTask = async (id) => {
    await markComplete(id);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTasks(id);
    fetchTasks();
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.title}
            </span>
            {!task.completed && <button onClick={() => handleCompleteTask(task.id)}>Complete</button>}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;