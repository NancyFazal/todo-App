import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "React Context API",
      dueDate: "03/01/2025",
    },
    {
      name: "React Hooks",
      dueDate: "03/01/2025",
    },
    {
      name: "Redux",
      dueDate: "03/01/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
