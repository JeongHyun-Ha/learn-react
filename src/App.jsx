import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [result, setResult] = useState("");
  function handleClick1() {
    axios
      .get("/api/main42/sub1")
      .then((response) => console.log(response.data));
  }

  function handleClick2() {
    axios.get("/api/main42/sub2").then((response) => setResult(response.data));
  }

  function handleClick3() {
    axios.get("/api/main42/sub3").then((res) => console.log(res.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      <button onClick={handleClick2}>응답 받기</button>
      <p>{result}</p>
      <hr />
      <button onClick={handleClick3}>JSON 응답 받기</button>
    </div>
  );
}

export default App;
