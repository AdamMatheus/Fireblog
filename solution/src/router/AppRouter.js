import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import Detail from "../pages/Detail";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from './PrivateRouter';


const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Dashboard/>}/>

                <PrivateRouter path="/profile" element={<Profile/>}/>
                <PrivateRouter path="/new-blog" element={<NewBlog/>}/>
                <PrivateRouter path="/detail" element={<Detail/>}/>
                <PrivateRouter path="/update-blog" element={<UpdateBlog/>}/>

            </Routes>

            
        </Router>
    )
}

export default AppRouter
