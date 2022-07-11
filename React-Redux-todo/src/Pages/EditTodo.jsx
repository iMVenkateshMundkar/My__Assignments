import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editTodoFailure,
  editTodoRequest,
  editTodoSuccess,
} from "../Redux/App/action";

function EditTodo() {
  const todos = useSelector((state) => state.app.todos);
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState("");
  const [editTodo, setEditTodo] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const editTododHandler = (id) => {
    dispatch(editTodoRequest());
    axios
      .patch(`/todos/${id}`, { title: newTitle })
      .then((r) => {
        dispatch(editTodoSuccess(r.data));
        navigate("/");
      })
      .catch((e) => dispatch(editTodoFailure(e)));
  };

  useEffect(() => {
    let editTodo = todos.find((item) => item.id === id);
    editTodo && setEditTodo(editTodo);
  }, [todos, id]);

  return (
    <div>
      <h3>Edit Todo</h3>
      <input
        type="text"
        value={newTitle}
        placeholder="Enter new title"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={() => editTododHandler(editTodo.id)}>Edit</button>
    </div>
  );
}

export default EditTodo;
