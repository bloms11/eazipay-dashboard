import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Conversations from "./pages/Conversations";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Router>
      <div className="relative" style={{ display: "flex" }}>
        {/* Sidebar */}
        <div className="flex max-[650px]:hidden">
          <Sidebar />
        </div>
        <div style={{ flex: 1 }}>
          {/* Navbar */}
          <Navbar />

          {/* Right Side Content */}
          <div className="h-[screen] p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/conversations" element={<Conversations />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
