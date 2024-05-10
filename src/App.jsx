import React from "react";

function App(props) {
  // object({}, [])
  const a = [6, 5, 1];
  const [x, y, z] = a;
  console.log("x", x);
  console.log("y", y);
  console.log("z", z);

  const [b, ...c] = a;
  console.log("b", b);
  console.log("c", c);

  // 배열 복사
  const [...d] = a; // 각 원소를 새 배열에 복사
  const e = a; // 참조값 복사
  console.log("d", d);
  console.log("e", e);

  a[0] = 66;
  console.log(e[0]);
  console.log(d[0]);

  return <div></div>;
}

export default App;
