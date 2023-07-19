function Square(
  { value } /* <- this is a prop, you can pass data through it/variable*/
) {
  function handleClick() {
    console.log("clicked!");
  }
  // function doesn't contain export so it will not be rendered
  // and is used for the client-side logic
  return (
    <button
      classname="square"
      onClick={
        handleClick
      } /* onClick and related functions are supported with functions */
    >
      {value}
    </button>
  );
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

    // don't need to add a second ending bracket for functions

    // to add data into the {value} prop, you can set it from the
    // function calls
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
