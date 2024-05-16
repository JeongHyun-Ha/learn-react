import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  function handleClick1() {
    const obj1 = { name: "son", age: 44 };
    // const data = JSON.stringify(obj1);
    axios.post("/api/main41/sub1", obj1); // 자동으로 stringify 해줌
  }

  function handleClick2() {
    const obj = { city: "seoul", country: "korea" };
    axios.post("/api/main41/sub2", obj);
  }

  function handleClick3() {
    // const data = {
    //   name: name,
    //   city: city,
    // };
    // const data = {
    //   name,
    //   city,
    // };
    axios.post("/api/main41/sub3", { name, city });
  }

  function handleClick4() {
    axios.post("/api/main41/sub4", { country, address });
  }

  return (
    <div>
      <button onClick={handleClick1}>요청(json 데이터 포함)</button>
      <button onClick={handleClick2}>요청(json 데이터 포함)2</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>요청</button>
      </div>
      <hr />
      <div>
        <input type="text" onChange={(e) => setCountry(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
        <br />
        <button onClick={handleClick4}>요청</button>
      </div>
    </div>
  );
}

export default App;
