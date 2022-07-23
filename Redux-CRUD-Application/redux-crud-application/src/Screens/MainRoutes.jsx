import React from "react";
import { Stack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../Components/RequireAuth";
import SideBar from "../Components/SideBar";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import EditTaskScreen from "./EditTaskScreen";
import CreateTaskScreen from "./CreateTaskScreen";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Stack direction="row">
              <SideBar />
              <HomeScreen />
            </Stack>
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route
        path="/tasks/:id"
        element={
          <RequireAuth>
            <Stack direction="row">
              <SideBar />
              <EditTaskScreen />
            </Stack>
          </RequireAuth>
        }
      />
      <Route
        path="/task"
        element={
          <RequireAuth>
            <Stack direction="row">
              <SideBar />
              <CreateTaskScreen />
            </Stack>
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
