import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Screens/Login";
import Books from "../Screens/Books";
import EditBook from "../Screens/EditBook";
import SingleBook from "../Screens/SingleBook";
import RequireAuth from "../Components/RequireAuth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
      <Route
        path="/books/:id/edit"
        element={
          // <RequireAuth>
          <EditBook />
          // </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default AllRoutes;
