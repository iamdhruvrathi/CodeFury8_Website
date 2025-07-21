import React, { useState, useEffect, useCallback } from 'react';
import { Play, RotateCcw, Trophy } from 'lucide-react';

const Game = () => {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameOver'>('menu');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [birdY, setBirdY] = useState(250);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [obstacles, setObstacles] = useState<Array<{ x: number; gapY: number }>>([]);

  const GRAVITY = 0.5;
  const JUMP_STRENGTH = -8;
  const OBSTACLE_WIDTH = 60;
  const OBSTACLE_GAP = 150;
  const BIRD_SIZE = 20;

  const resetGame = () => {
    setBirdY(250);
    setBirdVelocity(0);
    setObstacles([{ x: 400, gapY: 200 }]);
    setScore(0);
    setGameState('playing');
  };

  const jump = useCallback(() => {
    if (gameState === 'playing') {
      setBirdVelocity(JUMP_STRENGTH);
    }
  }, [gameState]);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('codefury-game-highscore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('codefury-game-highscore', score.toString());
    }
  }, [score, highScore]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [jump]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const gameLoop = setInterval(() => {
      setBirdY(prevY => {
        const newY = prevY + birdVelocity;
        if (newY < 0 || newY > 480) {
          setGameState('gameOver');
          return prevY;
        }
        return newY;
      });

      setBirdVelocity(prev => prev + GRAVITY);

      setObstacles(prev => {
        const newObstacles = prev.map(obs => ({ ...obs, x: obs.x - 3 }))
          .filter(obs => obs.x > -OBSTACLE_WIDTH);

        if (newObstacles.length === 0 || newObstacles[newObstacles.length - 1].x < 200) {
          newObstacles.push({
            x: 500,
            gapY: 150 + Math.random() * 200
          });
        }

        // Check collisions
        const bird = { x: 80, y: birdY, size: BIRD_SIZE };
        for (const obs of newObstacles) {
          if (bird.x < obs.x + OBSTACLE_WIDTH && bird.x + bird.size > obs.x) {
            if (bird.y < obs.gapY || bird.y + bird.size > obs.gapY + OBSTACLE_GAP) {
              setGameState('gameOver');
              return prev;
            }
          }
          
          // Score when passing obstacle
          if (obs.x + OBSTACLE_WIDTH === 77) {
            setScore(prevScore => prevScore + 1);
          }
        }

        return newObstacles;
      });
    }, 16);

    return () => clearInterval(gameLoop);
  }, [gameState, birdVelocity, birdY]);

  return (
    <section id="game" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-green-400 glow-text">CodeFury</span> MiniGame
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <div className="relative w-full h-96 bg-gradient-to-b from-blue-900 to-blue-800 rounded-lg overflow-hidden border-2 border-cyan-500/30">
              {/* Game Canvas */}
              {gameState === 'menu' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Code Bird</h3>
                    <p className="text-gray-300 mb-6">Navigate through the obstacles!</p>
                    <button
                      onClick={resetGame}
                      className="glow-button bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 mx-auto"
                    >
                      <Play className="w-5 h-5" />
                      <span>Start Game</span>
                    </button>
                  </div>
                </div>
              )}

              {gameState === 'gameOver' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-red-400 mb-2">Game Over!</h3>
                    <p className="text-white mb-2">Score: {score}</p>
                    <p className="text-cyan-400 mb-6">High Score: {highScore}</p>
                    <button
                      onClick={resetGame}
                      className="glow-button bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 mx-auto"
                    >
                      <RotateCcw className="w-5 h-5" />
                      <span>Try Again</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Bird */}
              <div
                className="absolute w-6 h-6 bg-yellow-400 rounded-full border-2 border-yellow-300 transition-all duration-75"
                style={{
                  left: '80px',
                  top: `${birdY}px`,
                  transform: `rotate(${Math.min(Math.max(birdVelocity * 3, -30), 30)}deg)`
                }}
              >
                <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
              </div>

              {/* Obstacles */}
              {obstacles.map((obstacle, index) => (
                <div key={index}>
                  {/* Top pipe */}
                  <div
                    className="absolute bg-green-500 border-2 border-green-400"
                    style={{
                      left: `${obstacle.x}px`,
                      top: '0px',
                      width: `${OBSTACLE_WIDTH}px`,
                      height: `${obstacle.gapY}px`
                    }}
                  />
                  {/* Bottom pipe */}
                  <div
                    className="absolute bg-green-500 border-2 border-green-400"
                    style={{
                      left: `${obstacle.x}px`,
                      top: `${obstacle.gapY + OBSTACLE_GAP}px`,
                      width: `${OBSTACLE_WIDTH}px`,
                      height: `${400 - obstacle.gapY - OBSTACLE_GAP}px`
                    }}
                  />
                </div>
              ))}

              {/* Click area for mobile */}
              {gameState === 'playing' && (
                <button
                  onClick={jump}
                  className="absolute inset-0 w-full h-full bg-transparent focus:outline-none"
                  aria-label="Jump"
                />
              )}
            </div>

            {/* Game Stats */}
            <div className="flex justify-between items-center mt-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">{score}</div>
                <div className="text-sm text-gray-400">Score</div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Trophy className="w-5 h-5" />
                <div>
                  <div className="text-2xl font-bold">{highScore}</div>
                  <div className="text-sm text-gray-400">Best</div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-400 mt-4 text-sm">
              Press SPACEBAR or tap to jump • Avoid the pipes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;