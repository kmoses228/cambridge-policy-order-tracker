import React from "react";
import "./App.css";
import Home from "./views/home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename="/cambridge-policy-order-tracker">
      <Home />
    </Router>
  );
}

export default App;
