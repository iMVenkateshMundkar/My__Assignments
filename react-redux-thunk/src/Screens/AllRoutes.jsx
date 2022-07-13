import React from "react";
import { Routes, Route } from "react-router-dom";
import SingleTodo from "./SingleTodo";
import Todos from "./Todos";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todos/:id" element={<SingleTodo />} />
    </Routes>
  );
};

export default AllRoutes;
