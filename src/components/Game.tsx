import React, { useEffect, useRef, useState } from 'react';

const GRAVITY = 0.5;
const FLAP_STRENGTH = -7;
const OBSTACLE_WIDTH = 50;
const OBSTACLE_GAP = 150;
const BIRD_SIZE = 20;

interface Obstacle {
  x: number;
  gapY: number;
}

const Game: React.FC = () => {
  const birdY = useRef(200);
  const birdVelocity = useRef(0);
  const obstacles = useRef<Obstacle[]>([]);
  const animationFrame = useRef<number>();

  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameOver'>('start');
  const [, setRender] = useState(false); // dummy to trigger rerender for drawing

  const resetGame = () => {
    birdY.current = 200;
    birdVelocity.current = 0;
    obstacles.current = [{ x: 400, gapY: 200 }];
    setScore(0);
    setGameState('playing');
  };

  const flap = () => {
    if (gameState === 'playing') {
      birdVelocity.current = FLAP_STRENGTH;
    } else if (gameState === 'start') {
      resetGame();
    } else if (gameState === 'gameOver') {
      setGameState('start');
    }
  };

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

  useEffect(() => {
    if (gameState !== 'playing') return;

    const update = () => {
      // Update bird position
      birdVelocity.current += GRAVITY;
      birdY.current += birdVelocity.current;

      if (birdY.current < 0 || birdY.current > 480) {
        setGameState('gameOver');
        return;
      }

      // Update obstacles
      const newObstacles = obstacles.current
        .map(obs => ({ ...obs, x: obs.x - 3 }))
        .filter(obs => obs.x > -OBSTACLE_WIDTH);

      // Add new obstacle
      if (
        newObstacles.length === 0 ||
        newObstacles[newObstacles.length - 1].x < 200
      ) {
        newObstacles.push({
          x: 500,
          gapY: 100 + Math.random() * 200,
        });
      }

      // Collision check and score update
      newObstacles.forEach(obs => {
        const birdX = 80;
        if (
          birdX < obs.x + OBSTACLE_WIDTH &&
          birdX + BIRD_SIZE > obs.x &&
          (birdY.current < obs.gapY || birdY.current + BIRD_SIZE > obs.gapY + OBSTACLE_GAP)
        ) {
          setGameState('gameOver');
        }

        if (Math.floor(obs.x + OBSTACLE_WIDTH) === 80) {
          setScore(prev => prev + 1);
        }
      });

      obstacles.current = newObstacles;
      setRender(r => !r); // triggers a visual update
      animationFrame.current = requestAnimationFrame(update);
    };

    animationFrame.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame.current!);
  }, [gameState]);

  return (
    <div className="relative w-full h-[500px] bg-blue-300 overflow-hidden">
      {/* Bird */}
      <div
        className="absolute left-[80px] bg-yellow-500 rounded-full"
        style={{
          top: `${birdY.current}px`,
          width: `${BIRD_SIZE}px`,
          height: `${BIRD_SIZE}px`,
        }}
      />

      {/* Obstacles */}
      {obstacles.current.map((obs, i) => (
        <React.Fragment key={i}>
          <div
            className="absolute bg-green-600"
            style={{
              left: `${obs.x}px`,
              top: '0px',
              width: `${OBSTACLE_WIDTH}px`,
              height: `${obs.gapY}px`,
            }}
          />
          <div
            className="absolute bg-green-600"
            style={{
              left: `${obs.x}px`,
              top: `${obs.gapY + OBSTACLE_GAP}px`,
              width: `${OBSTACLE_WIDTH}px`,
              height: `${500 - (obs.gapY + OBSTACLE_GAP)}px`,
            }}
          />
        </React.Fragment>
      ))}

      {/* UI */}
      <div className="absolute top-4 left-4 text-white font-bold text-xl">Score: {score}</div>

      {gameState === 'start' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl mb-2 font-bold">Flappy Bird</h1>
          <p className="text-sm">Press Space to Start</p>
        </div>
      )}

      {gameState === 'gameOver' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl font-bold mb-2">Game Over</h1>
          <p className="text-lg mb-1">Score: {score}</p>
          <p className="text-sm">Press Space to Restart</p>
        </div>
      )}
    </div>
  );
};

export default Game;