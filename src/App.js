import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Events from "./pages/Events.js";
import People from "./pages/People.js";
import Join from "./pages/Join.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {
    return (
      <div>
        <NavBar />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/people" element={<People />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </Router>
        
        
      </div>
        
    );
}

export default App;
