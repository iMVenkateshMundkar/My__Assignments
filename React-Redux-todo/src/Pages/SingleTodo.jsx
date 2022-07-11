import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "../Redux/App/action";

function SingleTodo() {
  const todos = useSelector((state) => state.app.todos);
  const [currentTodo, setCurrentTodo] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const toggleHandler = (id, newStatus) => {
    dispatch(toggleTodoRequest());
    axios
      .patch(`/todos/${id}`, { status: newStatus })
      .then((r) => dispatch(toggleTodoSuccess(r.data)))
      .catch((e) => dispatch(toggleTodoFailure(e)));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodoRequest());
    axios
      .delete(`/todos/${id}`)
      .then((r) => {
        dispatch(removeTodoSuccess(id));
        navigate("/");
      })
      .catch((e) => dispatch(removeTodoFailure(e)));
  };

  useEffect(() => {
    let currentTodo = todos.find((item) => item.id === id);
    currentTodo && setCurrentTodo(currentTodo);
  }, [todos, id]);
  return (
    <div>
      <h3>
        {currentTodo?.title} {currentTodo?.status ? "Completed" : "Incomplete"}
      </h3>
      <button
        onClick={() => toggleHandler(currentTodo.id, !currentTodo.status)}
      >
        Toggle
      </button>
      <button onClick={() => removeTodoHandler(currentTodo.id)}>Remove</button>
    </div>
  );
}

export default SingleTodo;
