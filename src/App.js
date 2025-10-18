import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Azure SWA App 🚀</h1>

          <nav style={{ marginBottom: "1rem" }}>
            <a href="/.auth/login/github">Login with GitHub</a> |{" "}
            <a href="/.auth/logout">Logout</a> |{" "}
            <a href="/dashboard">Dashboard</a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
