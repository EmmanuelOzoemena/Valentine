import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [elements, setElements] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Track if the message is revealed

  useEffect(() => {
    // Generate 30 random items for a fuller background
    const items = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20, 
      duration: 15 + Math.random() * 15,
      size: 15 + Math.random() * 25,
      emoji: ['🌸', '🎈', '💖', '✨'][i % 4] // Mix it up!
    }));
    setElements(items);
    
  }, []);

  return (
    <div className="container">
      {/* Background Floating Elements */}
      {elements.map((el) => (
        <span
          key={el.id}
          className="floating-element"
          style={{
            left: `${el.left}%`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            fontSize: `${el.size}px`
          }}
        >
          {el.emoji}
        </span>
      ))}

      {/* Interactive Valentine Card */}
      <div className={`valentine-card ${isOpen ? 'expanded' : ''}`}>
        <div className="card-icon">{isOpen ? '📂' : '💌'}</div>
        <h1>{isOpen ? "A Secret Note..." : "For You ❤️"}</h1>
        
        <p className="main-text">
          {isOpen 
            ? "I just wanted to say that you make every line of code worth writing and every day a bit brighter. You're the CSS to my HTML—without you, I'm just plain text! 🌹" 
            : "You have a new message waiting to be opened."}
        </p>

        <button 
          className={`btn-love ${isOpen ? 'btn-opened' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close Note" : "Open Message"}
        </button>
      </div>
    </div>
  );
}

export default App;