import { useState, useEffect, useCallback, useRef } from 'react';
import { Play, RotateCcw, Trophy } from 'lucide-react';

// Define the shape of an obstacle for better type safety and to track if it's been passed
interface Obstacle {
  id: number; // Unique ID for each obstacle for React keys
  x: number;
  gapY: number; // Y position of the gap's top edge
  passed: boolean; // To track if the student has passed this obstacle for scoring
}

// --- Constants (moved outside component to prevent re-declaration on each render) ---
const GAME_WIDTH = 500;
const GAME_HEIGHT = 400; // Matches the h-96 class (96 * 4px = 384px) - adjust if needed
const STUDENT_SIZE = 30; // Slightly larger for emoji visibility
const STUDENT_X_POSITION = 80; // The fixed horizontal position of the student

const GRAVITY = 0.4;
const JUMP_STRENGTH = -7;
const OBSTACLE_WIDTH = 60;
const OBSTACLE_GAP = 200; // Increased gap size for easier passing
const OBSTACLE_SPEED = 2.5; // How many pixels obstacles move per frame
const OBSTACLE_SPAWN_DISTANCE = 250; // Distance between obstacles

const Game = () => {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameOver'>('menu');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Renamed for a "CodeFury" theme
  const [studentY, setStudentY] = useState(GAME_HEIGHT / 2);
  const [studentVelocity, setStudentVelocity] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  // --- Refs to fix stale state in the game loop ---
  // The game loop (setInterval) creates a closure. Without refs, it would only
  // see the state values from when it was first created. Refs provide a "box"
  // that we can update with the latest state and read from inside the loop.
  const studentYRef = useRef(studentY);
  const studentVelocityRef = useRef(studentVelocity);
  const obstaclesRef = useRef(obstacles);
  const scoreRef = useRef(score);

  // Keep refs in sync with the state
  useEffect(() => { studentYRef.current = studentY; }, [studentY]);
  useEffect(() => { studentVelocityRef.current = studentVelocity; }, [studentVelocity]);
  useEffect(() => { obstaclesRef.current = obstacles; }, [obstacles]);
  useEffect(() => { scoreRef.current = score; }, [score]);


  // --- Game State Management ---

  const resetGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setStudentY(GAME_HEIGHT / 2);
    setStudentVelocity(0);
    // Initialize with a fresh obstacle off-screen
    setObstacles([
      { id: Date.now(), x: GAME_WIDTH, gapY: 150 + Math.random() * (GAME_HEIGHT - OBSTACLE_GAP - 200), passed: false },
    ]);
  }, []);

  const jump = useCallback(() => {
    // We only allow jumping when the game is actively being played
    if (gameState === 'playing') {
      setStudentVelocity(JUMP_STRENGTH);
    }
  }, [gameState]);


  // --- High Score Persistence ---

  // Load high score from local storage on initial component mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem('codefury-game-highscore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10)); // Use radix 10 for safety
    }
  }, []);

  // Update high score when game ends
  const updateHighScore = useCallback(() => {
    if (scoreRef.current > highScore) {
      setHighScore(scoreRef.current);
      localStorage.setItem('codefury-game-highscore', scoreRef.current.toString());
    }
  }, [highScore]);


  // --- Input Handling ---

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Allow jump on Spacebar press, but also start the game from the menu
      if (e.code === 'Space') {
        e.preventDefault(); // Prevents page scrolling
        if (gameState === 'playing') {
          jump();
        } else if (gameState === 'menu' || gameState === 'gameOver') {
          resetGame();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress); // Cleanup
  }, [gameState, jump, resetGame]);


  // --- Main Game Loop ---

  useEffect(() => {
    // Only run the loop if the game is in the 'playing' state
    if (gameState !== 'playing') {
      if (gameState === 'gameOver') {
          updateHighScore();
      }
      return;
    }

    const gameLoop = setInterval(() => {
      // 1. Apply gravity to velocity
      const newVelocity = studentVelocityRef.current + GRAVITY;
      setStudentVelocity(newVelocity);

      // 2. Update student position
      const newY = studentYRef.current + newVelocity;
      setStudentY(newY);
      
      // 3. Update obstacles' positions and handle scoring
      let scoreIncreased = false;
      const newObstacles = obstaclesRef.current
        .map(obs => ({ ...obs, x: obs.x - OBSTACLE_SPEED }))
        .map(obs => {
          // **ROBUST SCORING LOGIC**
          // Check if the obstacle has been passed and hasn't been scored yet
          if (!obs.passed && obs.x + OBSTACLE_WIDTH < STUDENT_X_POSITION) {
            scoreIncreased = true;
            return { ...obs, passed: true };
          }
          return obs;
        })
        .filter(obs => obs.x > -OBSTACLE_WIDTH); // Remove obstacles that are off-screen

      if (scoreIncreased) {
          setScore(prev => prev + 1);
      }

      // 4. Spawn new obstacles
      if (newObstacles.length > 0 && newObstacles[newObstacles.length - 1].x < GAME_WIDTH - OBSTACLE_SPAWN_DISTANCE) {
        newObstacles.push({
          id: Date.now(),
          x: GAME_WIDTH,
          gapY: 100 + Math.random() * (GAME_HEIGHT - OBSTACLE_GAP - 150),
          passed: false,
        });
      }
      setObstacles(newObstacles);

      // 5. Check for collisions
      const studentRect = { x: STUDENT_X_POSITION, y: newY, width: STUDENT_SIZE, height: STUDENT_SIZE };
      
      // Ground/Ceiling collision
      if (studentRect.y < 0 || studentRect.y + studentRect.height > GAME_HEIGHT) {
        setGameState('gameOver');
      }

      // Obstacle collision
      for (const obs of newObstacles) {
        const topPipeRect = { x: obs.x, y: 0, width: OBSTACLE_WIDTH, height: obs.gapY };
        const bottomPipeRect = { x: obs.x, y: obs.gapY + OBSTACLE_GAP, width: OBSTACLE_WIDTH, height: GAME_HEIGHT };

        const collidesWithTop = studentRect.x + studentRect.width > topPipeRect.x && studentRect.x < topPipeRect.x + topPipeRect.width && studentRect.y < topPipeRect.y + topPipeRect.height;
        const collidesWithBottom = studentRect.x + studentRect.width > bottomPipeRect.x && studentRect.x < bottomPipeRect.x + bottomPipeRect.width && studentRect.y + studentRect.height > bottomPipeRect.y;

        if (collidesWithTop || collidesWithBottom) {
          setGameState('gameOver');
          break; // Exit loop on first collision
        }
      }

    }, 16); // ~60 frames per second

    // Cleanup: clear the interval when the component unmounts or gameState changes
    return () => clearInterval(gameLoop);
    // **CORRECT DEPENDENCY ARRAY**
    // The loop should only be set up/torn down when the gameState changes.
    // The logic inside uses refs to get the latest values, avoiding stale state.
  }, [gameState, updateHighScore]);

  return (
    <section id="game" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-green-400 glow-text">CodeFury</span> MiniGame
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-4 sm:p-8 rounded-2xl">
            <div
              className="relative overflow-hidden rounded-lg border-2 border-cyan-500/30 bg-gradient-to-b from-blue-900 to-blue-800"
              style={{ width: `${GAME_WIDTH}px`, height: `${GAME_HEIGHT}px` }}
              onClick={() => gameState === 'playing' ? jump() : resetGame()} // Click to jump or restart
            >
              {/* Menu Overlay */}
              {gameState === 'menu' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                  <div className="text-center">
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

              {/* Student Character (Emoji) */}
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
                }}
              >
                🎓
              </div>

              {/* Obstacles (Pillars) */}
              {obstacles.map(obstacle => (
                <div key={obstacle.id}> {/* Use unique ID for key */}
                  <div
                    className="absolute bg-gray-700 border-2 border-gray-600 rounded-b-md"
                    style={{
                      left: `${obstacle.x}px`,
                      top: '0px',
                      width: `${OBSTACLE_WIDTH}px`,
                      height: `${obstacle.gapY}px`
                    }}
                  />
                  <div
                    className="absolute bg-gray-700 border-2 border-gray-600 rounded-t-md"
                    style={{
                      left: `${obstacle.x}px`,
                      top: `${obstacle.gapY + OBSTACLE_GAP}px`,
                      width: `${OBSTACLE_WIDTH}px`,
                      height: `${GAME_HEIGHT - (obstacle.gapY + OBSTACLE_GAP)}px`
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Game Stats Display */}
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
              Press **SPACEBAR** or **tap the screen** to jump.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;