export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, i) => (
        <li key={turn.join("-")}>
          {i % 2 === 0 ? "X" : "O"} selected{" "}
          {`Row: ${turn[0]}, Col: ${turn[1]}`}
        </li>
      ))}
    </ol>
  );
}
