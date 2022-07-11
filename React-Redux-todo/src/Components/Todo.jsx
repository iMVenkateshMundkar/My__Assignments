import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "../Redux/App/action";
import axios from "axios";

function Todo({ item }) {
  const dispatch = useDispatch();
  const toggleTodoHandler = (id, newStatus) => {
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
      .then((r) => dispatch(removeTodoSuccess(id)))
      .catch((e) => dispatch(removeTodoFailure(e)));
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={item.status ? true : false}
          onChange={() => toggleTodoHandler(item.id, !item.status)}
        />
      </td>
      <td>
        <Link to={`/todo/${item.id}`}>{item.title}</Link>
      </td>
      <td>{item.status ? "Completed" : "Incomplete"}</td>
      <td>
        <button onClick={() => removeTodoHandler(item.id)}>Remove</button>
      </td>
      <td>
        <Link to={`/todo/${item.id}/edit`}>
          <button>Edit</button>
        </Link>
      </td>
    </tr>
  );
}

export default Todo;
