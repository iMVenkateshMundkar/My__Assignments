import { useDispatch, useSelector } from "react-redux";
import "../Styles/Todos.css";
import {
  getTodoListsFailure,
  getTodoListsRequest,
  getTodoListsSuccess,
} from "../Redux/App/action";
import { useEffect } from "react";

import axios from "axios";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import Navbar from "./Navbar";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.app.todos);
  const getTodos = () => {
    dispatch(getTodoListsRequest());
    axios
      .get("/todos")
      .then((r) => dispatch(getTodoListsSuccess(r.data)))
      .catch((e) => dispatch(getTodoListsFailure(e)));
  };

  useEffect(() => {
    if (todos.length === 0) {
      getTodos();
    }
  }, []);
  return (
    <div className="todos">
      <h3>Todos</h3>
      <AddTodo />
      <div>
        <table>
          <thead>
            <tr>
              <th>Toggle</th>
              <th>Title</th>
              <th>Status</th>
              <th>Remove</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => (
              <Todo key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
