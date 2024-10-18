import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react"
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Education from "./routes/Education"
import Experience from "./routes/Experience"
import Resume from "./routes/Resume"
import { Route, Routes, HashRouter } from "react-router-dom";
import "./index.css"

function App() {
    return (
        // <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
        // </HashRouter>
    )
}

export default App;
