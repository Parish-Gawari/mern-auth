import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import Profile from "../pages/Profile";
import PrivateRoute from "../components/PrivateRoute";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="about" element={<About />} />{" "}
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
