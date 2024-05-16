import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    const obj1 = { name: "son", age: 44 };
    // const data = JSON.stringify(obj1);
    axios.post("/api/main41/sub1", obj1); // 자동으로 stringify 해줌
  }

  return (
    <div>
      <button onClick={handleClick1}>요청(json 데이터 포함)</button>
    </div>
  );
}

export default App;
