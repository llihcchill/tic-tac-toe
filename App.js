function Square() {
  // function doesn't contain export so it will not be rendered
  // and is used for the client-side logic
  return <button className="square">1</button>;
}

export default function Board() {
  // export means that this function can be used anywhere
  // default means that this function is the main one in the file

  return (
    // a function cannot return multiple JSX elements at once
    // in order to actually return multiple, you can wrap all of the
    // elements into a fragment and render them all in one

    // inside of fragment, the <Square></Square> things are calling the
    // Square() function, take note very cool!!
    <>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
}
