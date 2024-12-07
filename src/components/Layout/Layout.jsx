import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import About from "../About/About";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
        </>
    );
}
