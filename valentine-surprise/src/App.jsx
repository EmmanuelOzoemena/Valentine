import { useState } from "react";
import "./App.css";
import FloatingElements from "./components/FloatingElements"; 
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const message = `Hi beautiful soul 💖

This is a little hug in words. You deserve love that feels safe, soft, and real.

Keep shining… the world is brighter just by being in it. ✨🌹`;

  return (
    <div className="container">
      {/* 1. We replaced the old loop with this single component */}
      <FloatingElements />

      {/* 2. Your Interactive Valentine Card */}
      <div className={`valentine-card ${isOpen ? "expanded" : ""}`}>
        <div className="card-icon">{isOpen ? "🌸" : "💌"}</div>
        <h1>{isOpen ? "A Secret Note..." : "For You ❤️"}</h1>

        <p className="main-text">
          {isOpen ? message : "You have a new message waiting to be opened."}
        </p>

        <button
          className={`btn-love ${isOpen ? "btn-opened" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close Note" : "Open Message"}
        </button>
      </div>
    </div>
  );
}

export default App;