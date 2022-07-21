import React from "react";
import { Stack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../Components/RequireAuth";
import SideBar from "../Components/SideBar";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

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
    </Routes>
  );
};

export default MainRoutes;
