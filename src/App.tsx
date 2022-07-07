import React from "react";
import "./App.css";
import Home from "./views/home";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
