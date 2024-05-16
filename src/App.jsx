import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [code, setCode] = useState(200);
  function handleClick200() {
    axios.get("/api/main43/sub1").then((res) => console.log("200 응답"));
  }

  function handleClickCode() {
    axios
      .get(`/api/main43/sub3?code=${code}`)
      .catch((res) => console.log(`${code} 응답`));
  }

  return (
    <div>
      <button onClick={handleClick200}>200 응답</button>
      <hr />
      <input type="number" onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleClickCode}>{code} 응답</button>
    </div>
  );
}

export default App;
