import React from "react";

function App(props) {
  // object
  // {} 안에 property 명 : property 값 쌍들이 작성됨
  let a = { name: "흥민", age: 30, address: "korea" };
  let b = {};
  console.log("a", a);
  console.log("b", b);

  console.log("a.name ", a.name);
  console.log("a.age", a["age"]);

  b.name = "강인";
  console.log("b", b);
  b.name = "이강인";
  console.log("b", b);

  // 없는 프로퍼티에도 접근 가능
  console.log("b의 city", b.city);
  b.city = "부산";
  b.address = "강남";
  console.log("b", b);
  return <div></div>;
}

export default App;
