import axios from "axios";
import '../Styles/AddTodo.css'
import { v4 } from "uuid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../Redux/App/action";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = (payload) => {
    dispatch(addTodoRequest());
    axios
      .post("/todos", payload)
      .then((r) => dispatch(addTodoSuccess(r.data)))
      .catch((e) => dispatch(addTodoFailure(e)));
  };

  const addTodoHandler = () => {
    if (todo) {
      const payload = { title: todo, status: false };
      payload.id = v4();
      addTodo(payload);
      setTodo("");
    }
  };
  return (
    <div className="addtodos">
      <h3>Add Todo</h3>
      <input
        type="text"
        value={todo}
        placeholder="Add todo here..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
}

export default AddTodo;
