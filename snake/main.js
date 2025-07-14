import React, { useEffect, useState } from "react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 5, y: 5 };
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};

const Main = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(DIRECTIONS.ArrowRight);
    setGameOver(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (DIRECTIONS[event.key]) {
        setDirection(DIRECTIONS[event.key]);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y
        };

        const hasCollision =
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE ||
          prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y);

        if (hasCollision) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          const newFood = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE)
          };
          setFood(newFood);
          return newSnake; // snake grows
        } else {
          return newSnake.slice(0, -1); // snake moves
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, [direction, food, gameOver]);

  return (
    <div className="game-container">
      <h1>Snake Game</h1>
      <div className="grid">
        {[...Array(GRID_SIZE)].map((_, row) => (
          <div key={row} className="row">
            {[...Array(GRID_SIZE)].map((_, col) => {
              const isSnake = snake.some((s) => s.x === col && s.y === row);
              const isFood = food.x === col && food.y === row;
              return (
                <div
                  key={col}
                  className={`cell${isSnake ? " snake" : ""}${isFood ? " food" : ""}`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>

      {gameOver && (
        <div className="game-over">
          Game Over
          <br />
          <button onClick={resetGame} className="btn btn-primary">
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
