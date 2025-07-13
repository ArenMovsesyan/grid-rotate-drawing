import { useState } from "react";
import "./App.css";

const GRID_SIZE = 4;

function App() {
  const [grid, setGrid] = useState(
    Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(false))
  );

  const toggleCell = (row, col) => {
    const newGrid = grid.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? !cell : cell))
    );
    setGrid(newGrid);
  };

  const rotateGrid = () => {
    const newGrid = Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(false));

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        newGrid[j][GRID_SIZE - 1 - i] = grid[i][j];
      }
    }

    setGrid(newGrid);
  };

  return (
    <div className="container">
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell ? "active" : ""}`}
              onClick={() => toggleCell(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <button className="rotate-button" onClick={rotateGrid}>
        Rotate
      </button>
    </div>
  );
}

export default App;
