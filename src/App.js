import React from "react";
import Input from "./component/input/Input";
import "./App.css";
import TodoItem from "./component/todoItem/TodoItem";
import { useSelector } from "react-redux/es/exports";
import { selectTodoList } from "./storereducer/TodoSlice";

const App = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app-container">
        <div className="todo-container">
          {todoList.map(   (item) => (  <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} /> ) )}
        </div>
        <Input key={todoList.id} name={todoList.item} done={todoList.done} id={todoList.id}/>
      </div>
    </div>
  );
};

export default App;
