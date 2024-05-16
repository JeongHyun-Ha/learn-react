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

  return (
    <div>
      <button onClick={handleClick1}>json 데이터와 요청</button>
    </div>
  );
}

export default App;
