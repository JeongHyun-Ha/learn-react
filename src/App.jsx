import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount 될 때");
  }, []);
  useEffect(() => {
    console.log("count 가 변경될 때");
    // setCount(count + 1); // 무한 루프
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;
