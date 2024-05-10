import React from "react";

function MyComp({ headColor, bodyColor }) {
  return (
    <div>
      <h1 style={{ color: headColor }}>Lorem.</h1>
      <p style={{ color: bodyColor }}>Lorem ipsum dolor.</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp bodyColor={"blue"} headColor={"red"} />
      <MyComp bodyColor={"gray"} headColor={"purple"} />
    </div>
  );
}

export default App;
