import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    const data = {
      name: "손흥민",
      age: 33,
      married: false,
      team: {
        location: "london",
        name: "토트넘",
      },
      item: ["phone", "shoes", "shirts"],
      address: null,
    };
    axios.post("/api/main41/sub5", data);
  }

  function handleClick2() {
    axios.post("/api/main41/sub6", {
      name: "son",
      age: 33,
    });
  }

  function handleClick3() {
    axios.post("/api/main41/sub7", {
      name: "hello",
      age: 100,
    });
  }

  return (
    <div>
      <button onClick={handleClick1}>json 데이터와 요청</button>
      <button onClick={handleClick2}>json 데이터와 요청</button>
      <hr />
      <div>
        <button onClick={handleClick3}>json 데이터와 요청</button>
      </div>
    </div>
  );
}

export default App;
