import { useState } from "react";
// this is a special function that practically lets react 'remember' things

function Square() {
  const [value, setValue] = useState(null);
  // value = the value and setValue = change the value of value
  // the null in useState(null) is the default value of value

  function handleClick() {
    setValue("X");
    // setValue is not a library function, it is the function that
    // is used in the useState constant value and it is changing
    // value to be equal to X and not 1 then 2 then 3 etc.
  }
  // function doesn't contain export so it will not be rendered
  // and is used for the client-side logic
  return (
    <button
      className="square"
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
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

// props are useful for sharing data from parent to children
// it's not quite for dynamic data, just for data transport
