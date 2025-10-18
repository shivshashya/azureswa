import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Welcome to My Azure SWA App 🚀</h1>

      <nav>
        <a href="/.auth/login/github">Login with GitHub</a> |{" "}
        <a href="/.auth/logout">Logout</a> |{" "}
        <a href="/dashboard">Go to Dashboard</a>
      </nav>
    </div>
  );
}

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="/.auth/login/github">Login with GitHub</a> |{" "}
        <a href="/.auth/logout">Logout</a> |{" "}
        <a href="/dashboard">Dashboard</a>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
