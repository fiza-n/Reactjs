import API from "../api/api.js";

export const getTasks = () => API.get("/tasks");

export const addTasks = (tasks) => API.post("/tasks", tasks);

export const markComplete = (id) => API.patch(`/tasks${id}`, {completed: true});

export const deleteTasks = (id) => API.delete(`/tasks${id}`);

