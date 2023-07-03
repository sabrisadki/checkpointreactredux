import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveTodo, filterDone } from "../../storereducer/TodoSlice";
import "./Input.css";

const Input = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const dispatch = useDispatch();

  const addTodo = () => {
    if (input.trim() !== "") {
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now(),
        })
      );
      setInput("");
    }
  };

  const handleFilter = () => {
    dispatch(filterDone());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <button className="btn" onClick={addTodo}>
          Add
        </button>
      </form>
      <button className="btn" onClick={handleFilter}>
        Filter Undone
      </button>
    </div>
  );
};

export default Input;
