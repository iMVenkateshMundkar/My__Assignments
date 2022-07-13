import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userLogin } from "../Redux/Authentication/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(userLogin({ email, password })).then((r) => {
        if (r.type === "USER_LOGIN_SUCCESS") {
          navigate(comingFrom);
        }
      });
    }
  };

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
