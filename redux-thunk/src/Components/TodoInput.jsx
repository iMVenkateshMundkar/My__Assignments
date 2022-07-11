import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
} from "../Redux/action";

const TodoInput = ({ getTodos }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
    };
    setTitle("");
    dispatch(addTodosRequest());
    axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => dispatch(addTodosSuccess()))
      //.then(() => dispatch(getTodos()))
      .catch((e) => dispatch(addTodosFailure(e)));
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
