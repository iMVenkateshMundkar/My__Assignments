import React from "react";
import "../Styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

// Actions
import {
  loginTodoFailure,
  loginTodoRequest,
  loginTodoSuccess,
} from "../Redux/Auth/action";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
      dispatch(loginTodoRequest());
      axios({
        method: "post",
        url: "/api/login",
        baseURL: "https://reqres.in",
        data: { email, password },
      })
        .then((r) => dispatch(loginTodoSuccess(r.data)))
        .catch((e) => dispatch(loginTodoFailure()))
        .then((r) => {
          if (r.type === "LOGIN_TODO_SUCCESS") {
            navigate("/");
          }
        });
    }
  };

  return (
    <div className="login">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <div className="labelInput">
          <label>Email : </label>
          <input
            type="email"
            placeholder="Enter your registered email id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="labelInput">
          <label>Password : </label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
