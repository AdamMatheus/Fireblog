import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Login } from "../pages/LoginRegister";
import { Register } from "../pages/LoginRegister";
import Dashboard from "../pages/Dashboard";
import UpdateBlog from "../pages/UpdateBlog";
import Detail from "../pages/Detail";

import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />

        <Route path="/private" element={<PrivateRouter><Profile /></PrivateRouter>} />
        <Route path="/private" element={<PrivateRouter><NewBlog /></PrivateRouter>} />
        <Route path="/private/update-blog/:id" element={<PrivateRouter><UpdateBlog /></PrivateRouter>} />
        <Route path="/private/detail/:id" element={<PrivateRouter><Detail /></PrivateRouter>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;