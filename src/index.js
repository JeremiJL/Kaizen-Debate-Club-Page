import React from "react";
import { createRoot } from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import JoinUs from "./pages/JoinUs";
import Layout from "./pages/Layout";
import AboutUs from "./pages/AboutUs";
import Rules from "./pages/Rules";


export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="joinus" element={<JoinUs/>}/>
                    <Route path="aboutus" element={<AboutUs/>}/>
                    <Route path="rules" element={<Rules/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}

createRoot(document.getElementById("root"))
    .render(React.createElement(App));
