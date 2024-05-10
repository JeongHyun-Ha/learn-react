import React from "react";

function App(props) {
  return (
    <div>
      <button
        onClick={() => console.log("clicked")}
        onMouseEnter={() => console.log("mouse entered")}
        onMouseLeave={() => console.log("mouse leave")}
      >
        클릭
      </button>

      <input type="text" onChange={() => console.log("changed")} />
    </div>
  );
}

export default App;
