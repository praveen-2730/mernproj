import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contact from "./contact";
import Home from "./home";
import About from "./about";

const Main = () => {
    return (
        <>
            <h1>Routes</h1>
            <Router>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Routes>
                    <Route path="/home" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>

            </Router>
        </>
    )
}
export default Main