import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Main from "./pages/Main.jsx";
import "./index.css";
import Header from "./pages/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
createRoot(document.getElementById("root")).render(
  <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/header" element={<Header />} />
    </Routes>
    <StrictMode>
      <App /> 
    </StrictMode>
  </Router>
);
