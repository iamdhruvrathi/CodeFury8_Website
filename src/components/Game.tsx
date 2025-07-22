import { useEffect, useRef, useState } from 'react';

export default function FlappyBirdGame() {
  const [birdPosition, setBirdPosition] = useState(200);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState([{ x: 400, height: 150 }]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover'>('start');
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const gravity = 0.6;
  const flapStrength = -10;
  const birdSize = 40;
  const pipeWidth = 60;
  const gap = 150;
  const gameHeight = 500;
  const gameWidth = 400;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') flap();
    };

    const handleTouchStart = () => {
      flap();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [gameState]);

  const flap = () => {
    if (gameState === 'start') {
      setGameState('playing');
    }
    if (gameState === 'playing') {
      setVelocity(flapStrength);
    }
  };

  useEffect(() => {
    let interval: number;
    if (gameState === 'playing') {
      interval = window.setInterval(() => {
        setBirdPosition((prev) => prev + velocity);
        setVelocity((prev) => prev + gravity);
        setPipes((prev) =>
          prev.map((pipe) => ({ ...pipe, x: pipe.x - 4 }))
        );
      }, 30);
    }
    return () => clearInterval(interval);
  }, [velocity, gameState]);

  useEffect(() => {
    if (gameState !== 'playing') return;
    const lastPipe = pipes[pipes.length - 1];
    if (lastPipe.x < gameWidth - 200) {
      const topHeight = Math.floor(Math.random() * (gameHeight - gap));
      setPipes([...pipes, { x: gameWidth, height: topHeight }]);
    }

    const hitPipe = pipes.some((pipe) => {
      const inXRange = pipe.x < 80 && pipe.x + pipeWidth > 40;
      const inYRange =
        birdPosition < pipe.height || birdPosition > pipe.height + gap;
      return inXRange && inYRange;
    });

    if (birdPosition < 0 || birdPosition + birdSize > gameHeight || hitPipe) {
      setGameState('gameover');
    }
  }, [birdPosition, pipes, gameState]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-800 to-black">
      <div
        ref={gameContainerRef}
        className="relative w-[400px] h-[500px] bg-gradient-to-b from-blue-600 to-blue-800 border-4 border-white rounded-lg overflow-hidden shadow-2xl"
      >
        {gameState === 'start' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white text-xl font-bold z-10">
            <p>Touch or press Space to start</p>
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white text-xl font-bold z-10">
            <p className="mb-2">Game Over</p>
            <p>Score: {score}</p>
            <button
              className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
              onClick={() => {
                setBirdPosition(200);
                setVelocity(0);
                setPipes([{ x: 400, height: 150 }]);
                setScore(0);
                setGameState('start');
              }}
            >
              Restart
            </button>
          </div>
        )}

        <div
          className="absolute bg-yellow-400 rounded-full"
          style={{
            top: birdPosition,
            left: 40,
            width: birdSize,
            height: birdSize,
          }}
        />

        {pipes.map((pipe, index) => (
          <div key={index}>
            <div
              className="absolute bg-green-600"
              style={{
                top: 0,
                left: pipe.x,
                width: pipeWidth,
                height: pipe.height,
              }}
            />
            <div
              className="absolute bg-green-600"
              style={{
                top: pipe.height + gap,
                left: pipe.x,
                width: pipeWidth,
                height: gameHeight - pipe.height - gap,
              }}
            />
          </div>
        ))}

        <div className="absolute top-2 left-2 text-white font-bold text-xl">
          {gameState === 'playing' && <p>Score: {score}</p>}
        </div>
      </div>
    </div>
  );
}
