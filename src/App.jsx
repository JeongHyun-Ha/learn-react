import React from "react";

function App(props) {
  const obj1 = { name: "son", age: 33 };
  const json1 = '{ "name": "son", "age": 33 }';

  const obj2 = { name: "lee", age: 22 };
  const json2 = JSON.stringify(obj2);
  return (
    <div>
      <p>{json2}</p>
    </div>
  );
}

export default App;
