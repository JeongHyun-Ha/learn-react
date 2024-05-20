import React from "react";

function App(props) {
  const names = ["ab", "cd", "ef", "gh"];

  // 배열을 map 메소드를 사용해서 컴포넌트들을 만들 때
  // key prop을 사용해서 효율성을 높일 것
  // key prop 값은 주로 primary key가 사용됨
  return (
    <div>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </div>
  );
}

export default App;
