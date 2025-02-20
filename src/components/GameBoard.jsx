import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, board }) {
  let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  board.forEach(([r, c], i) => {
    if (i % 2 === 0) gameBoard[r][c] = "X";
    else gameBoard[r][c] = "O";
  });

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={gameBoard[rowIndex][colIndex]}
                  onClick={() => onSelect(rowIndex, colIndex)}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
