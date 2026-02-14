import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Fewer elements = better performance
  const items = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    emoji: ['🌸', '🎈', '💖'][i % 3]
  }));

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {items.map((item) => (
        <motion.span
          key={item.id}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 1, 1, 0],
            x: [0, 15, -15, 0] // Gentle swaying
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: item.left,
            fontSize: '24px',
            willChange: 'transform' // Forces GPU acceleration
          }}
        >
          {item.emoji}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingElements;