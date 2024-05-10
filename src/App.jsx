import React from "react";

function App(props) {
  // object ({}, [])
  // 나머지 모두 (rest property)
  // ...변수명

  const a = {
    name: "Ha",
    email: "Ha@naver.com",
    password: "123",
    address: "seoul",
  };

  const { name, email, ...b } = a;
  console.log(b);

  const c = {
    city: "seoul",
    country: "us",
    price: 400,
    category: "food",
  };

  const { price, ...d } = c;
  console.log("price", price);
  console.log(d);

  return <div></div>;
}

export default App;
