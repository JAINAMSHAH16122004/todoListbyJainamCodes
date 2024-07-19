import "./App.css";
import Header from "./Components/Header";
import TodoHero from "./Components/TodoHero";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todos, setTodos] = useState([
    { title: "Some task", id: uuidv4(), is_completed: false },
    // { title: "Some other task", id: uuidv4(), is_completed: true },
    // { title: "last task", id: uuidv4(), is_completed: false }
  ]);                   
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
    <Header/>
    <TodoHero todos_completed={todos_completed} total_todos={total_todos}/>
    <Form todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
