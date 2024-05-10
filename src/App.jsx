import React from "react";

function App(props) {
  // function : 함수

  // 1. 이름 있는 함수
  function action1(param1, param2) {
    // 명령문들
    return param1 + param2;
  }

  // 2. 이름 없는 함수
  const v = function (param1, param2) {
    return param1 + param2;
  };

  // 3. arrow function
  // 3.1. 파라미터가 여러개, 명령문이 여러 개
  const a = (param1, param2, param3) => {
    // 명령문..
    // 1
    // 2
  };

  // 함수 실행
  action1(null, null);
  v(null, null);
  a(null, null, null);

  // 3.2. 파라미터가 없고, 명령문이 여러 개
  const b = () => {
    return 0;
  };
  b();

  // 3.3. 파라미터가 한 개, 명령문이 여러 개 (파라미터 괄호 안 써도 됨)
  const c = (param1) => {
    // 명령문들
  };

  // 3.4. 명령문이 하나일 때 (중괄호 생략 가능)
  const d = () => console.log("명령문이 하나인 arrow function");

  const e = () => "중괄호 생략시 값이 리턴됨";
  const f = () => {
    return "중괄호 생략시 값이 리턴됨";
  };

  return <div></div>;
}

export default App;
