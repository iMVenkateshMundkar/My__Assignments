import React from "react";
import { Routes, Route } from "react-router-dom";
import EditTodo from "./EditTodo";
import HomePage from "./HomePage";
import Login from "./Login";
import SingleTodo from "./SingleTodo";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todo/:id" element={<SingleTodo />} />
      <Route path="/todo/:id/edit" element={<EditTodo />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Pages;
