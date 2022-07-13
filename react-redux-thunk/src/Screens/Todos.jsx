import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TodoInput from "../Components/TodoInput";

// Actions
import { getTodos } from "../Redux/action";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(getTodos());
    }
  }, [dispatch, getTodos]);

  return (
    <div className="todos">
      <h2>Todos</h2>
      <TodoInput />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.status ? "Completed" : "Incomplete"}</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
