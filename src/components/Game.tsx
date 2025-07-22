import { useEffect, useRef, useState } from 'react';

const FlappyBirdGame = () => { const [birdPosition, setBirdPosition] = useState(300); const [gravity, setGravity] = useState(2); const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover'>('start'); const [pipes, setPipes] = useState<{ top: number; left: number }[]>([]); const [score, setScore] = useState(0);

const gameRef = useRef<HTMLDivElement>(null); const birdRef = useRef<HTMLDivElement>(null);

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Smooth animation using requestAnimationFrame useEffect(() => { let animationFrame: number; const gameLoop = () => { setBirdPosition((prev) => { const next = prev + gravity; return next > window.innerHeight - 100 ? window.innerHeight - 100 : next; });

setPipes((prevPipes) =>
    prevPipes.map((pipe) => ({ ...pipe, left: pipe.left - 2 }))
  );

  animationFrame = requestAnimationFrame(gameLoop);
};

if (gameState === 'playing') {
  animationFrame = requestAnimationFrame(gameLoop);
}

return () => cancelAnimationFrame(animationFrame);

}, [gameState, gravity]);

useEffect(() => { const handleKeyDown = (e: KeyboardEvent) => { if (e.code === 'Space') handleInput(); }; window.addEventListener('keydown', handleKeyDown); return () => window.removeEventListener('keydown', handleKeyDown); }, [gameState]);

const handleInput = () => { if (gameState !== 'playing') startGame(); else flap(); };

const flap = () => { setBirdPosition((prev) => Math.max(prev - 60, 0)); };

const startGame = () => { setGameState('playing'); setScore(0); setBirdPosition(300); setPipes([ { top: Math.random() * 200 + 50, left: 600 }, { top: Math.random() * 200 + 50, left: 900 }, ]); };

const resetGame = () => { setGameState('start'); setPipes([]); setBirdPosition(300); };

return ( <div
ref={gameRef}
onClick={handleInput}
className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-blue-800 to-blue-400"
> <div ref={birdRef} className="absolute left-16 w-12 h-12 bg-yellow-400 rounded-full shadow-lg transition-all duration-200 ease-in-out" style={{ top: birdPosition }} ></div>

{pipes.map((pipe, index) => (
    <div key={index} className="absolute w-14 bg-green-500">
      <div
        className="absolute bottom-full h-60 rounded-md shadow-lg"
        style={{ height: pipe.top, left: pipe.left }}
      >
        <div className="w-14 h-full bg-green-700"></div>
      </div>
      <div
        className="absolute top-full mt-20 h-60 rounded-md shadow-lg"
        style={{ top: pipe.top + 150, left: pipe.left }}
      >
        <div className="w-14 h-full bg-green-700"></div>
      </div>
    </div>
  ))}

  {gameState === 'start' && (
    <div className="absolute w-full text-center top-1/3 text-white text-2xl font-semibold animate-pulse">
      {isMobile ? 'Tap to Start 🚀' : 'Press Space to Start 🚀'}
    </div>
  )}

  {gameState === 'gameover' && (
    <div className="absolute w-full top-1/3 text-center text-white text-2xl">
      <div className="font-bold mb-4">Game Over 💀</div>
      <button
        onClick={resetGame}
        className="mt-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md transition"
      >
        Restart
      </button>
    </div>
  )}

  <div className="absolute top-6 left-6 text-white text-xl md:text-3xl font-bold transition-all duration-300 ease-in-out">
    Score: {score}
  </div>
</div>

); };

export default FlappyBirdGame;

