import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { setCheck,deleteTodo } from "../../storereducer/TodoSlice";
import "./TodoItem.css";

const TodoItem = ({ name, done, id }) => {
  const dispach = useDispatch();
  const handleCheck = () => { dispach(setCheck(id)); };
  const handledelete = ()=> {  dispach(deleteTodo({id : id})) };  

  return (
    <div className="todo-item">
      <input type="checkbox" className="checkbox" id={id} checked={done} onChange={handleCheck}  />
      <label htmlFor={id} className={done ? "active" : ""}> {name} </label>
      <button type="button" onClick={handledelete} className="cssbuttons-io-button" >delete</button>
    </div>
  );
};

export default TodoItem;
