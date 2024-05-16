import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    axios
      .get("/api/main42/sub1")
      .then((response) => console.log(response.data));
  }

  function handleClick2() {
    axios
      .get("/api/main42/sub2")
      .then((response) => console.log(response.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      <button onClick={handleClick2}>응답 받기</button>
    </div>
  );
}

export default App;
