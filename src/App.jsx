import React from "react";

function App(props) {
  // object ({}, [])
  // [] : 배열, 원소를 순서대로 저장한 객체
  const a = [6, 7, 8];
  const v1 = a[0];
  const v2 = a[1];
  const v3 = a[2];
  console.log(v1);
  console.log(v2);
  console.log(v3);

  const [x, y, z] = a;
  console.log("x", x);
  console.log("y", y);
  console.log("z", z);

  const b = ["pizza", 3.14, "lunch"];
  const [x1, x2, x3] = b;
  console.log("x1", x1);
  console.log("x2", x2);
  console.log("x3", x3);

  const c = ["son", "lee"];
  const [a1, a2, a3] = c;
  console.log("a1", a1);
  console.log("a2", a2);
  console.log("a3", a3);

  const d = ["name", "email", "phone"];
  const [d1, d2, d3, d4 = "city"] = d;
  console.log(d1);
  console.log(d2);
  console.log(d3);
  console.log(d4);
  return <div></div>;
}

export default App;
