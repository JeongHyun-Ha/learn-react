import React from "react";

function App(props) {
  // 이름있는 함수
  function action1() {
    console.log("Action 1");
  }

  // 이름 없는 함수
  const a = function () {
    console.log("anonymous action");
  };
  return (
    <div>
      <button onClick={action1}>클릭!</button>
      <br />
      <button onClick={a}>클릭@</button>
      <br />
      <button onClick={() => console.log("arrow function")}>클릭$</button>
    </div>
  );
}

export default App;
