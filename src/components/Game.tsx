import { useState, useEffect, useCallback, useRef } from 'react';
import { Play, RotateCcw, Trophy } from 'lucide-react';

// --- Types ---
interface Obstacle {
  id: number;
  x: number;
  gapY: number;
  passed: boolean;
}

// --- Constants ---
const GAME_WIDTH = 500;
const GAME_HEIGHT = 400;
const STUDENT_SIZE = 30;
const STUDENT_X_POSITION = 80;
const GRAVITY = 0.4;
const JUMP_STRENGTH = -7;
const OBSTACLE_WIDTH = 60;
const OBSTACLE_GAP = 200;
const OBSTACLE_SPEED = 2.5;
const OBSTACLE_SPAWN_DISTANCE = 250;

const Game = () => {
  // --- State ---
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameOver'>('menu');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [studentY, setStudentY] = useState(GAME_HEIGHT / 2);
  const [studentVelocity, setStudentVelocity] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  // --- Refs for game loop ---
  const studentYRef = useRef(studentY);
  const studentVelocityRef = useRef(studentVelocity);
  const obstaclesRef = useRef(obstacles);
  const scoreRef = useRef(score);

  useEffect(() => { studentYRef.current = studentY; }, [studentY]);
  useEffect(() => { studentVelocityRef.current = studentVelocity; }, [studentVelocity]);
  useEffect(() => { obstaclesRef.current = obstacles; }, [obstacles]);
  useEffect(() => { scoreRef.current = score; }, [score]);

  // --- Reset Game ---
  const resetGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setStudentY(GAME_HEIGHT / 2);
    setStudentVelocity(0);
    setObstacles([
      {
        id: Date.now(),
        x: GAME_WIDTH,
        gapY: 150 + Math.random() * (GAME_HEIGHT - OBSTACLE_GAP - 200),
        passed: false
      },
    ]);
  }, []);

  // --- Jump ---
  const jump = useCallback(() => {
    if (gameState === 'playing') setStudentVelocity(JUMP_STRENGTH);
  }, [gameState]);

  // --- High Score Persistence ---
  useEffect(() => {
    const savedHighScore = localStorage.getItem('codefury-game-highscore');
    if (savedHighScore) setHighScore(parseInt(savedHighScore, 10));
  }, []);
  const updateHighScore = useCallback(() => {
    if (scoreRef.current > highScore) {
      setHighScore(scoreRef.current);
      localStorage.setItem('codefury-game-highscore', scoreRef.current.toString());
    }
  }, [highScore]);

  // --- Keyboard Input ---
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (gameState === 'playing') jump();
        else if (gameState === 'menu' || gameState === 'gameOver') resetGame();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState, jump, resetGame]);

  // --- Main Game Loop ---
  useEffect(() => {
    if (gameState !== 'playing') {
      if (gameState === 'gameOver') updateHighScore();
      return;
    }
    const gameLoop = setInterval(() => {
      // Gravity
      const newVelocity = studentVelocityRef.current + GRAVITY;
      setStudentVelocity(newVelocity);

      // Move player
      const newY = studentYRef.current + newVelocity;
      setStudentY(newY);

      // Obstacles & scoring
      let scoreIncreased = false;
      const newObstacles = obstaclesRef.current
        .map(obs => ({ ...obs, x: obs.x - OBSTACLE_SPEED }))
        .map(obs => {
          if (!obs.passed && obs.x + OBSTACLE_WIDTH < STUDENT_X_POSITION) {
            scoreIncreased = true;
            return { ...obs, passed: true };
          }
          return obs;
        })
        .filter(obs => obs.x > -OBSTACLE_WIDTH);

      if (scoreIncreased) setScore(prev => prev + 1);

      // Spawn new obstacle
      if (
        newObstacles.length > 0 &&
        newObstacles[newObstacles.length - 1].x < GAME_WIDTH - OBSTACLE_SPAWN_DISTANCE
      ) {
        newObstacles.push({
          id: Date.now(),
          x: GAME_WIDTH,
          gapY: 100 + Math.random() * (GAME_HEIGHT - OBSTACLE_GAP - 150),
          passed: false,
        });
      }
      setObstacles(newObstacles);

      // Collision detection
      const studentRect = {
        x: STUDENT_X_POSITION,
        y: newY,
        width: STUDENT_SIZE,
        height: STUDENT_SIZE,
      };
      if (studentRect.y < 0 || studentRect.y + studentRect.height > GAME_HEIGHT) {
        setGameState('gameOver');
      }
      for (const obs of newObstacles) {
        const topPipeRect = {
          x: obs.x,
          y: 0,
          width: OBSTACLE_WIDTH,
          height: obs.gapY,
        };
        const bottomPipeRect = {
          x: obs.x,
          y: obs.gapY + OBSTACLE_GAP,
          width: OBSTACLE_WIDTH,
          height: GAME_HEIGHT,
        };
        const collidesWithTop =
          studentRect.x + studentRect.width > topPipeRect.x &&
          studentRect.x < topPipeRect.x + topPipeRect.width &&
          studentRect.y < topPipeRect.y + topPipeRect.height;
        const collidesWithBottom =
          studentRect.x + studentRect.width > bottomPipeRect.x &&
          studentRect.x < bottomPipeRect.x + bottomPipeRect.width &&
          studentRect.y + studentRect.height > bottomPipeRect.y;
        if (collidesWithTop || collidesWithBottom) {
          setGameState('gameOver');
          break;
        }
      }
    }, 16);
    return () => clearInterval(gameLoop);
  }, [gameState, updateHighScore]);

  // --- Background Pattern SVG (coding theme) ---
  const codePattern = (
    <svg width="100%" height="100%" className="absolute inset-0 z-0 pointer-events-none select-none" style={{ opacity: 0.08 }}>
      <defs>
        <pattern id="codePattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <text x="0" y="20" fontSize="16" fill="#fff" fontFamily="monospace">{'{'}</text>
          <text x="20" y="35" fontSize="16" fill="#fff" fontFamily="monospace">{';'}</text>
          <text x="10" y="10" fontSize="14" fill="#fff" fontFamily="monospace">{'<'}</text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#codePattern)" />
    </svg>
  );

  // --- Render ---
  return (
  <section id="game" className="py-20 relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="text-green-400 glow-text">CodeFury</span> MiniGame
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-4 sm:p-8 rounded-2xl">

          {/* Game Canvas - Responsive */}
          <div
            className="relative overflow-hidden rounded-xl border-4 border-purple-400 shadow-lg mx-auto w-full aspect-[4/3] max-w-[700px]"
            style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #6366f1 100%)',
              boxShadow: '0 8px 40px 0 rgba(80,30,180,0.3)',
            }}
            onClick={() => gameState === 'playing' ? jump() : resetGame()}
          >
            {/* Background Code Pattern */}
            {codePattern}

            {/* Menu Overlay */}
            {gameState === 'menu' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Code Student</h3>
                  <p className="text-gray-300 mb-6">Navigate the coding challenges!</p>
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

            {/* Game Over Overlay */}
            {gameState === 'gameOver' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10">
                <div className="text-center px-4">
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

            {/* Player */}
            <div
              className="absolute text-4xl"
              style={{
                left: `${STUDENT_X_POSITION}px`,
                top: `${studentY}px`,
                width: `${STUDENT_SIZE}px`,
                height: `${STUDENT_SIZE}px`,
                transform: `rotate(${Math.min(Math.max(studentVelocity * 3, -30), 30)}deg)`,
                transition: 'transform 150ms linear',
                lineHeight: '1',
                filter: 'drop-shadow(0 2px 6px #0ff8)',
              }}
            >
              🧑‍💻
            </div>

            {/* Obstacles */}
            {obstacles.map((obstacle) => (
              <div key={obstacle.id}>
                {/* Top Pillar */}
                <div
                  className="absolute rounded-b-lg border-2"
                  style={{
                    left: `${obstacle.x}px`,
                    top: 0,
                    width: `${OBSTACLE_WIDTH}px`,
                    height: `${obstacle.gapY}px`,
                    background: 'linear-gradient(180deg, #e0e7ff 0%, #c026d3 100%)',
                    borderColor: '#a21caf',
                    boxShadow: '0 4px 12px 2px #c026d366',
                  }}
                />
                {/* Bottom Pillar */}
                <div
                  className="absolute rounded-t-lg border-2"
                  style={{
                    left: `${obstacle.x}px`,
                    top: `${obstacle.gapY + OBSTACLE_GAP}px`,
                    width: `${OBSTACLE_WIDTH}px`,
                    height: `${GAME_HEIGHT - (obstacle.gapY + OBSTACLE_GAP)}px`,
                    background: 'linear-gradient(0deg, #e0e7ff 0%, #c026d3 100%)',
                    borderColor: '#a21caf',
                    boxShadow: '0 -4px 12px 2px #c026d366',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Game Stats */}
          <div className="flex justify-between items-center mt-6 px-2 sm:px-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{score}</div>
              <div className="text-sm text-gray-400">Score</div>
            </div>
            <div className="text-center flex items-center gap-2 text-yellow-400">
              <Trophy className="w-5 h-5" />
              <div>
                <div className="text-2xl font-bold">{highScore}</div>
                <div className="text-sm text-gray-400">Best</div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-4 text-sm">
            Press <strong>SPACEBAR</strong> or <strong>tap the screen</strong> to jump.
          </p>
        </div>
      </div>
    </div>
  </section>
);

};

export default Game;