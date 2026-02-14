import { useState } from "react";
import "./App.css";
import FloatingElements from "./components/FloatingElements";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const message = `Hi beautiful soul 💖

This is a little hug in words. You deserve love that feels safe, soft, and real.

Keep shining… the world is brighter just by being in it. ✨🌹`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "A Valentine Message For You",
          text: "I wanted to send you a little piece of my heart today. Open this when you have a moment. ❤️🌹",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing", error);
      }
    } else {
      // Fallback: Copy to clipboard if sharing API isn't supported
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard! Share it with your Valentine! ❤️");
    }
  };

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

        <div className="button-group">
          <button
            className={`btn-love ${isOpen ? "btn-opened" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close Note" : "Open Message"}
          </button>

          {isOpen && (
            <button className="btn-share" onClick={handleShare}>
              Share Love 🔗
            </button>
          )}
        </div>
      </div>

      {/* Credit Link */}
      <footer className="footer">
        Created with ❤️ by{" "}
        <a href="https://x.com/emmanuel_oz1" target="_blank" rel="noreferrer">
          @emmanuel_oz1
        </a>
      </footer>
    </div>
  );
}

export default App;
