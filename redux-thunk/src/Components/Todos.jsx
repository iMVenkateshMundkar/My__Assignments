import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import TodoInput from "./TodoInput";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // const getTodos = () => {
  //   dispatch(getTodosRequest());
  //   axios
  //     .get("http://localhost:8080/todos")
  //     .then((r) => dispatch(getTodosSuccess(r.data)))
  //     .catch((e) => dispatch(getTodosFailure(e)));
  // };

  useEffect(() => {
    if (todos?.length === 0) {
      // getTodos(dispatch);
      dispatch(getTodos);
    }
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <TodoInput getTodos={getTodos} />
      {todos?.map((e) => {
        return <div key={e.id}>{e.title}</div>;
      })}
    </div>
  );
};

export default Todos;
