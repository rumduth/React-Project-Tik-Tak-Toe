import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
function checkWinner(scores, player1, player2) {
  if (scores.some((score) => score === 3)) return [true, player1];
  if (scores.some((score) => score === -3)) return [true, player2];
  return [false];
}

function App() {
  const [players, setPlayers] = useState(["Player 1", "Player 2"]);
  const [gameTurns, setGameTurns] = useState([]);
  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  let activePlayer = gameTurns.length % 2 === 0 ? "X" : "O";

  function handleSelectSquare(r, c) {
    setGameTurns((prev) => [...prev, [r, c]]);
    let point = gameTurns.length % 2 === 0 ? 1 : -1;
    setScores((prev) => {
      let updatedScore = [...prev];
      updatedScore[r] += point;
      updatedScore[3 + c] += point;
      if (r === c) updatedScore[6] += point;
      if (r + c === 2) updatedScore[7] += point;
      return updatedScore;
    });
  }

  function resetGame() {
    setScores(() => [0, 0, 0, 0, 0, 0, 0, 0]);
    setGameTurns(() => []);
  }

  let winnerStatus = checkWinner(scores, players[0], players[1]);
  let winner = winnerStatus[0] && winnerStatus[1];
  let draw = gameTurns.length === 9;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players[0]}
            icon="X"
            onSave={setPlayers}
            isActive={activePlayer === "X"}
          />
          <Player
            initialName={players[1]}
            icon="O"
            onSave={setPlayers}
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || draw) && <GameOver winner={winner} onClick={resetGame} />}
        <GameBoard onSelect={handleSelectSquare} board={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
