const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Array com 9 posições vazias
  const [xIsNext, setXIsNext] = useState(true); // Controla de quem é a vez (true = X, false = O)

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
      [0, 4, 8], [2, 4, 6]             // Diagonais
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Retorna 'X' ou 'O'
      }
    }
    return null;
  }


  function handleClick(index) {
    const winner = calculateWinner(squares); 
    if (squares[index] || winner) return; // Trava o clique
    const nextSquares = [...squares];
    nextSquares[index] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function clearArr() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Tie";
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }


  return (
    <div className="board">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>

      <div className="board-row">
        <button className="square" onClick={() => handleClick(0)}>{squares[0]}</button>
        <button className="square" onClick={() => handleClick(1)}>{squares[1]}</button>
        <button className="square" onClick={() => handleClick(2)}>{squares[2]}</button>
      </div>

      <div className="board-row">
        <button className="square" onClick={() => handleClick(3)}>{squares[3]}</button>
        <button className="square" onClick={() => handleClick(4)}>{squares[4]}</button>
        <button className="square" onClick={() => handleClick(5)}>{squares[5]}</button>
      </div>

      <div className="board-row">
        <button className="square" onClick={() => handleClick(6)}>{squares[6]}</button>
        <button className="square" onClick={() => handleClick(7)}>{squares[7]}</button>
        <button className="square" onClick={() => handleClick(8)}>{squares[8]}</button>
      </div>

      <button id="reset" onClick={() => clearArr()}>Reset Game</button>
    </div>
  );
}

/*
-- HTML --

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Tic-Tac-Toe</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { Board } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<Board />);
    </script>
</body>

</html>

-- CSS --

* {
    font-family: "Secular One", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.square {
    width: 60px;
    height: 60px;
    font-size: 1.5em;
    margin: 5px;
    background: #fff;
    border: 1px solid #999;
    cursor: pointer;
    border-radius: 5px;
}

#reset {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
}

.board {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.board-row {
    display: flex;
}

*/