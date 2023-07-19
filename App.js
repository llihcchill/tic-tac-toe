export default function Square() {
  return (
    // a function cannot return multiple JSX elements at once
    // in order to actually return multiple, you can wrap all of the
    // elements into a fragment and render them all in one
    <>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>

      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>

      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}

// export means that this function can be used anywhere
// default means that this function is the main one in the file
