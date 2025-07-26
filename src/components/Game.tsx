import { useState, useEffect, useCallback, useRef } from 'react';
import { Play, RotateCcw, Trophy } from 'lucide-react';

interface Obstacle {
  id: number;
  x: number;
  gapY: number;
  passed: boolean;
}

const ASPECT_RATIO = 4 / 3;
const BASE_WIDTH = 500;
const BASE_HEIGHT = 400;

const STUDENT_SIZE = 30;
const STUDENT_X_POSITION = 80;

const BASE_SPEED = 2.5;
const BASE_GRAVITY = 0.40;
const BASE_GAP = 150;
const OBSTACLE_WIDTH = 60;
const OBSTACLE_SPAWN_DISTANCE = 250;

const MIN_GAP = 95;
const MAX_SPEED = 7.0;
const MAX_GRAVITY = 0.75;
const MIN_DIST = 100;

const JUMP_STRENGTH = -7;

const RAMP_UP_OBSTACLES = 5; // e.g. keep first 5 obstacles easy


const LOCALSTORAGE_HS = 'codefury-game-highscore';

function getRandomGapY(height: number, gap: number) {
  const padding = 70;
  return (
    padding + Math.random() * (height - gap - padding * 2)
  );
}

const Game = () => {
  // Responsive scaling: width is dynamic, all positions are scaled accordingly
  const [containerWidth, setContainerWidth] = useState(BASE_WIDTH);

  // Game state
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameOver'>('menu');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [studentY, setStudentY] = useState(BASE_HEIGHT / 2);
  const [studentVelocity, setStudentVelocity] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  // Dynamic difficulty states
  const [obstacleSpeed, setObstacleSpeed] = useState(BASE_SPEED);
  const [gravity, setGravity] = useState(BASE_GRAVITY);
  const [currentGap, setCurrentGap] = useState(BASE_GAP);
  const [obstacleDistance, setObstacleDistance] = useState(OBSTACLE_SPAWN_DISTANCE);

  // Refs for closure safety
  const studentYRef = useRef(studentY);
  const studentVelocityRef = useRef(studentVelocity);
  const obstaclesRef = useRef(obstacles);
  const scoreRef = useRef(score);

  const nextObstacleId = useRef(1);

  // Responsive layout
  useEffect(() => {
    function handleResize() {
      const ww = window.innerWidth,
        wh = window.innerHeight;
      const scaleW = Math.min(ww, 700);
      const scaleH = Math.min(wh * 0.7, scaleW / ASPECT_RATIO);
      setContainerWidth(Math.max(240, Math.round(Math.min(scaleW, scaleH * ASPECT_RATIO))));
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Refs sync
  useEffect(() => { studentYRef.current = studentY; }, [studentY]);
  useEffect(() => { studentVelocityRef.current = studentVelocity; }, [studentVelocity]);
  useEffect(() => { obstaclesRef.current = obstacles; }, [obstacles]);
  useEffect(() => { scoreRef.current = score; }, [score]);

  // Difficulty increases as score increases!
  useEffect(() => {
    setObstacleSpeed(Math.min(BASE_SPEED + score * 0.08, MAX_SPEED));
    setGravity(Math.min(BASE_GRAVITY + score * 0.01, MAX_GRAVITY));
    setCurrentGap(Math.max(BASE_GAP - score * 1.5, MIN_GAP));
    setObstacleDistance(Math.max(OBSTACLE_SPAWN_DISTANCE - score * 3, MIN_DIST));
  }, [score]);

  // Game reset
  const resetGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setStudentY(BASE_HEIGHT / 2);
    setStudentVelocity(0);
    setCurrentGap(BASE_GAP);
    setObstacleSpeed(BASE_SPEED);
    setGravity(BASE_GRAVITY);
    setObstacleDistance(OBSTACLE_SPAWN_DISTANCE);
    nextObstacleId.current = 1;
    setObstacles([
      {
        id: nextObstacleId.current++,
        x: BASE_WIDTH,
        gapY: getRandomGapY(BASE_HEIGHT, BASE_GAP),
        passed: false
      }
    ]);
  }, []);

  // Handle jump (space/tap)
  const jump = useCallback(() => {
    if (gameState === 'playing') setStudentVelocity(JUMP_STRENGTH);
  }, [gameState]);

  // Local storage high score
  useEffect(() => {
    const saved = localStorage.getItem(LOCALSTORAGE_HS);
    if (saved) setHighScore(+saved);
  }, []);

  useEffect(() => {
    if (gameState === 'gameOver') {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem(LOCALSTORAGE_HS, String(score));
      }
    }
  }, [gameState, score, highScore]);

  // Input handlers
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (gameState === 'playing') jump();
        else resetGame();
      }
    };
    const tapHandler = () => {
      if (gameState === 'playing') jump();
      else resetGame();
    };
    window.addEventListener('keydown', keyHandler);
    window.addEventListener('touchstart', tapHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
      window.removeEventListener('touchstart', tapHandler);
    };
  }, [gameState, jump, resetGame]);

  // --- Main Game Loop ---
  useEffect(() => {
    if (gameState !== 'playing') return;
    let animationId: number;

    const step = () => {
      // Physics and object sizes scale to container
      const width = BASE_WIDTH;
      const height = BASE_HEIGHT;

      // Use latest difficulty values from state, not closure!
      const currentObstacleSpeed = obstacleSpeed;
      const currentGravity = gravity;
      const currentObstacleDistance = obstacleDistance;
      const gap = currentGap;

      // Student position
      let newVelocity = studentVelocityRef.current + currentGravity;
      let newY = studentYRef.current + newVelocity;
      setStudentVelocity(newVelocity);
      setStudentY(newY);

      // Obstacles update and scoring
      let increased = false;
      let newObs = obstaclesRef.current
        .map(obs => ({ ...obs, x: obs.x - currentObstacleSpeed }))
        .map(obs => {
          if (!obs.passed && obs.x + OBSTACLE_WIDTH < STUDENT_X_POSITION) {
            increased = true;
            return { ...obs, passed: true };
          }
          return obs;
        })
        .filter(obs => obs.x > -OBSTACLE_WIDTH);

      if (increased) setScore(prev => prev + 1);

      // Add new obstacle
      if (
        newObs.length === 0 ||
        newObs[newObs.length - 1].x < width - currentObstacleDistance
      ) {
        newObs.push({
          id: nextObstacleId.current++,
          x: width,
          gapY: getRandomGapY(height, gap),
          passed: false,
        });
      }
      setObstacles(newObs);

      // Collision check
      const studentRect = {
        x: STUDENT_X_POSITION,
        y: newY,
        width: STUDENT_SIZE,
        height: STUDENT_SIZE,
      };
      if (studentRect.y < 0 || studentRect.y + studentRect.height > height) {
        setGameState('gameOver');
        return;
      }
      let isCollision = false;
      for (const obs of newObs) {
        const topRect = { x: obs.x, y: 0, width: OBSTACLE_WIDTH, height: obs.gapY };
        const bottomRect = {
          x: obs.x,
          y: obs.gapY + gap,
          width: OBSTACLE_WIDTH,
          height: height - (obs.gapY + gap),
        };
        const collidesWithTop =
          studentRect.x + studentRect.width > topRect.x &&
          studentRect.x < topRect.x + topRect.width &&
          studentRect.y < topRect.y + topRect.height;

        const collidesWithBottom =
          studentRect.x + studentRect.width > bottomRect.x &&
          studentRect.x < bottomRect.x + bottomRect.width &&
          studentRect.y + studentRect.height > bottomRect.y;

        if (collidesWithTop || collidesWithBottom) {
          isCollision = true;
          break;
        }
      }
      if (isCollision) {
        setGameState('gameOver');
        return;
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [gameState, obstacleSpeed, gravity, currentGap, obstacleDistance]);

  useEffect(() => {
  // For first N obstacles/pillars, keep it easy
  if (score < RAMP_UP_OBSTACLES) {
    setObstacleSpeed(BASE_SPEED);
    setGravity(BASE_GRAVITY);
    setCurrentGap(BASE_GAP);
    setObstacleDistance(OBSTACLE_SPAWN_DISTANCE);
  } else {
    // Scale up after initial "easy" period
    setObstacleSpeed(Math.min(BASE_SPEED + (score - RAMP_UP_OBSTACLES) * 0.08, MAX_SPEED));
    setGravity(Math.min(BASE_GRAVITY + (score - RAMP_UP_OBSTACLES) * 0.01, MAX_GRAVITY));
    setCurrentGap(Math.max(BASE_GAP - (score - RAMP_UP_OBSTACLES) * 1.5, MIN_GAP));
    setObstacleDistance(Math.max(OBSTACLE_SPAWN_DISTANCE - (score - RAMP_UP_OBSTACLES) * 3, MIN_DIST));
  }
}, [score]);


  // SVG Code Pattern BG
  const codePattern = (
    <svg
      width="100%"
      height="100%"
      className="absolute inset-0 z-0 pointer-events-none select-none"
      style={{ opacity: 0.09 }}
    >
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

  const ratio = containerWidth / BASE_WIDTH;

  return (
    <section id="game" className="py-8 sm:py-16 relative">
      <div className="container mx-auto px-4 max-w-screen-md">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-7 mt-6">
          <span className="text-green-400">CodeFury</span> MiniGame
        </h2>

        <div className="flex flex-col items-center">
          {/* Responsive Board */}
<div
  className="glass-card relative overflow-hidden rounded-xl shadow-lg mx-auto p-[4px] bg-gradient-to-r from-cyan-400 to-fuchsia-500"
  style={{
    width: "100%",
    maxWidth: `${containerWidth}px`, // containerWidth is max width, can vary by window size
    aspectRatio: `${BASE_WIDTH} / ${BASE_HEIGHT}`, // Maintains correct ratio responsively
    background: "linear-gradient(135deg, #1e293b 0%, #6366f1 100%)",
    boxShadow: "0 8px 40px 0 rgba(80,30,180,0.3)",
    borderRadius: "1rem",
    overflow: "hidden",
    transition: "width 150ms, height 150ms",
    touchAction: "manipulation",
    margin: "0 auto", // center horizontally
    position: "relative",
  }}
  onClick={gameState === 'playing' ? jump : resetGame}
  role="button"
  tabIndex={0}
  aria-label={gameState === 'playing' ? 'Tap or click to jump' : 'Start'}
>


            {codePattern}

            {gameState === 'menu' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                <div className="text-center px-3 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">MiniGame</h3>
                  <p className="text-gray-300 mb-6 text-sm">Jump between walls to score</p>
                  <button
                    onClick={resetGame}
                    className="glow-button bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 mx-auto"
                  >
                    <Play className="w-5 h-5" />
                    <span>Start!</span>
                  </button>
                </div>
              </div>
            )}

            {gameState === 'gameOver' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10">
                <div className="text-center px-3 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-2">Oops! Game Over</h3>
                  <p className="text-white mb-2 text-base">Score: <b>{score}</b></p>
                  <p className="text-cyan-400 mb-6 text-base">High Score: {highScore}</p>
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

            {/* Student */}
            <div
              className="absolute text-4xl"
              style={{
                left: `${ratio * STUDENT_X_POSITION}px`,
                top: `${ratio * studentY}px`,
                width: `${ratio * STUDENT_SIZE}px`,
                height: `${ratio * STUDENT_SIZE}px`,
                transform: `rotate(${Math.min(Math.max(studentVelocity * 3, -30), 30)}deg)`,
                transition: 'transform 100ms linear',
                lineHeight: '1',
                filter: 'drop-shadow(0 2px 6px #0ff8)',
                zIndex: 1,
                fontSize: `${ratio * 32}px`,
              }}
            >
              👨‍💻
            </div>

            {/* Obstacles */}
            {obstacles.map((obstacle) => (
              <div key={obstacle.id}>
                {/* Top Firewall */}
                <div
                  className="absolute rounded-b-lg border-2"
                  style={{
                    left: `${ratio * obstacle.x}px`,
                    top: 0,
                    width: `${ratio * OBSTACLE_WIDTH}px`,
                    height: `${ratio * obstacle.gapY}px`,
                    background: 'linear-gradient(180deg, #ff8a8a 0%, #c026d3 100%)',
                    borderColor: '#e11d48',
                    boxShadow: '0 4px 12px 2px #f43f5e66',
                  }}
                />
                {/* Bottom Firewall */}
                <div
                  className="absolute rounded-t-lg border-2"
                  style={{
                    left: `${ratio * obstacle.x}px`,
                    top: `${ratio * (obstacle.gapY + currentGap)}px`,
                    width: `${ratio * OBSTACLE_WIDTH}px`,
                    height: `${Math.max(0, ratio * (BASE_HEIGHT - (obstacle.gapY + currentGap)))}px`,
                    background: 'linear-gradient(0deg, #ff8a8a 0%, #c026d3 100%)',
                    borderColor: '#e11d48',
                    boxShadow: '0 -4px 12px 2px #f43f5e66',
                  }}
                />
              </div>
            ))}
          </div>

          <div className="w-full flex flex-row justify-between items-center mt-4 px-2 sm:px-4 max-w-full">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">{score}</div>
              <div className="text-xs sm:text-sm text-gray-400">Score</div>
            </div>
            <div className="text-center flex items-center gap-2 text-yellow-400">
              <Trophy className="w-5 h-5" />
              <div>
                <div className="text-xl sm:text-2xl font-bold">{highScore}</div>
                <div className="text-xs sm:text-sm text-gray-400">Best</div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-3 mb-2 text-xs sm:text-sm px-2 max-w-xs">
            Press <b>SPACEBAR</b> or <b>tap</b> to jump.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Game;
