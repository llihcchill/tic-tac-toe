import { useState } from "react";
// this is a special function that practically lets react 'remember' things

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // value = the value and setValue = change the value of value
  // the null in useState(null) is the default value of value

  //function handleClick() {
  //setValue("X");
  // setValue is not a library function, it is the function that
  // is used in the useState constant value and it is changing
  // value to be equal to X and not 1 then 2 then 3 etc.
  //}
  // function doesn't contain export so it will not be rendered
  // and is used for the client-side logic
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // export means that this function can be used anywhere
  // default means that this function is the main one in the file

  // "To collect data from multiple children, or to have
  // two child components communicate with each other, declare
  // the shared state in their parent component instead.
  // The parent component can pass that state back down to the
  // children via props. This keeps the child components in sync
  // with each other and with their parent."

  // creates a boolean using useState
  const [xIsNext, setXIsNext] = useState(true);

  // creates an array called squares and setSquares also using useState
  const [squares, setSquares] = useState(Array(9).fill(null));

  // now squares can be used to display the squares' state whereas
  // here setSquares can be used to set each square by their array place

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    // like in PHP, checking if the variable or statement is true or not
    // is easy by just putting the variable there or if not putting an ! there
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // .slice() function copies the array practically
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    // remember setSquares is a function from the useState function
    // this is also where all the game logic will go
  }

  const winner = calculateWinner(squares);
  let status;
  // same thing with PHP here in the if statement
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    // a function cannot return multiple JSX elements at once
    // in order to actually return multiple, you can wrap all of the
    // elements into a fragment and render them all in one

    // inside of fragment, the <Square></Square> things are calling the
    // Square() function, take note very cool!!

    // don't need to add a second ending bracket for functions

    // to add data into the {value} prop, you can set it from the
    // function calls
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// props are useful for sharing data from parent to children
// it's not quite for dynamic data, just for data transport

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // these are all the possible winning states in tic tac toe put into
  // an array

  // for each possible winning combination
  for (let i = 0; i < lines.length; i++) {
    // create a variable that holds the data in the array but in variable form
    const [a, b, c] = lines[i];
    // check if the squares[] array is idential to one of the winning possibilities
    // in the lines array
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // if so return the winning possibility
      return squares[a];
    }
  }
  // if the game has not been won, it does nothing
  return null;
}

