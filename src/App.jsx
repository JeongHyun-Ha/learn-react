import React from "react";

function App(props) {
  const a = {
    name: "adsf",
    age: 12,
    address: {
      street: "asdfasdf",
      city: "seoul",
    },
  };
  // 얕은 복사 (shallow copy)
  const { ...b } = a;
  b.age = 44;
  console.log("b.age", b.age);
  console.log("a.age", a.age);
  b.address.city = "busan";
  console.log("a.address.city", a.address.city);
  console.log("b.address.city", b.address.city);

  // 깊은 복사 (deep copy)
  // 얕은 복사를 여러번 한다.
  const { ...c } = a;
  const { ...address1 } = a.address; // 얕은 복사
  c.address = address1; // 깊은 복사

  c.address.city = "london";
  console.log("c.address.city", c.address.city);
  console.log("a.address.city", a.address.city);

  return <div></div>;
}

export default App;
