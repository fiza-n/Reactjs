import { createContext, useContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...newTodo } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleChecked = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, checked: !t.checked } : t
      )
    );
  };

  // Localstorage load
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos) setTodos(localTodos);
  }, []);

  // Localstorage save
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleChecked }}
    >
      {children}
    </TodoContext.Provider>
  );
};
