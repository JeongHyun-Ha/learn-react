import React, { useState } from "react";

function MyComp1() {
  const [val, setVal] = useState([]);
  function addItem() {
    val.push("a");
    setVal(val);
  }
  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={addItem}>변경</button>
      </div>
    </div>
  );
}

function MyComp2() {
  const [val, setVal] = useState([]);
  function addItem() {
    const [...newVal] = val;
    newVal.push("a");
    setVal(newVal);
  }
  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={addItem}>변경</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp1 />
      <MyComp2 />
    </div>
  );
}

export default App;
