import React from "react";
// default export는 아무 이름으로 import 할 수 있음, 중괄호 없이
import val, { v1 } from "./MyValues.jsx";
import str from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <div>{v1}</div>
      <div>{val}</div>
      <div>{str}</div>
    </div>
  );
}

export default App;
