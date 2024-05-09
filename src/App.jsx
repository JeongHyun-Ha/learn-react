import React from "react";

function App(props) {
  // object
  const a = {
    name: "John",
  };

  const b = a;
  console.log("a.name", a.name);

  b.name = "Jane";

  console.log("b.name", b.name);
  console.log("a.name", a.name);
  return <div></div>;
}

export default App;
