export default function Board() {
  return (
    // a function cannot return multiple JSX elements at once
    // in order to actually return multiple, you can wrap all of the
    // elements into a fragment and render them all in one
    <>
      <div className="board-row">
      // className in JSX is class="" in regular HTML
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}

// export means that this function can be used anywhere
// default means that this function is the main one in the file
