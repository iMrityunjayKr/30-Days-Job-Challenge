import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./component/heading";
import TaskInput from "./component/TaskInput";
import Todolist from "./component/Todolist";

function App() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const [newTask, setNewTask] = useState("");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todo));
  }, [todo]);
  // ✅ Add a todo
  function handleAdd() {
    if (newTask === "") return;
    const newTodo = { id: Date.now(), text: newTask, completed: false };
    setTodo([...todo, newTodo]);
    setNewTask("");
  }

  // ✅ Delete a todo
  function handleDelete(id) {
    setTodo(todo.filter((todo) => todo.id !== id));
  }

  // ✅ Toggle complete
  function handleComplete(id) {
    setTodo(
      todo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  }

  return (
    <div className="app">
      <Heading />
      <TaskInput
        newTask={newTask}
        setNewTask={setNewTask}
        handleAdd={handleAdd}
      />
      <Todolist
        todo={todo}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;
