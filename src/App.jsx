import React, { useState } from "react";

function App(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [team, setTeam] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div>
      <div>
        이름
        <input
          type="text"
          placeholder={"이름"}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        나이
        <input
          type="text"
          placeholder={"나이"}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        팀
        <input
          type="text"
          placeholder={"팀"}
          onChange={(e) => setTeam(e.target.value)}
        />
      </div>
      <div>
        국가
        <input
          type="text"
          placeholder={"국가"}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        {age}세 {name}은 {country}, {team}소속입니다.
      </div>
    </div>
  );
}

export default App;
