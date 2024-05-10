import React from "react";

function App(props) {
  // 나머지 모두 문법으로 객체 복사
  const a = {
    name: "son",
    age: 33,
    city: "london",
  };
  const b = a;
  b.age = 44;
  console.log(a.age);

  const { ...c } = a;
  c.city = "seoul";
  console.log(c.city);
  console.log(a.city);

  const e = {
    name: "lee",
    country: "korea",
    team: "paris",
    salary: 700,
    city: "seoul",
  };

  const { ...d } = e;
  console.log(e);
  d.city = "busan";
  console.log(d);

  return <div></div>;
}

export default App;
