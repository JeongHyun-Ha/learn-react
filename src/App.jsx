function App() {
  // const, let 중에 사용
  const myTag = <h1>hello</h1>;
  const val1 = "흥민";
  const val2 = 3.14;
  const val3 = 456;
  const bool1 = false;
  const bool2 = true;
  const nullVal = null;
  const undefinedV = undefined;
  const arr1 = [1, 2];
  const obj = { age: 3, name: "강인" };

  // {} : jsx 내에서 javascript 코드 사용
  return (
    <>
      <p>
        {val1} 선수는 연봉이 {val3} 억원이다.
      </p>
      <div>{myTag}</div>
      <div>{val1}</div>
      <div>{val2}</div>
      <div>{val3}</div>

      {/* 출력 X */}
      <div>{bool1}</div>
      <div>{bool2}</div>
      <div>{nullVal}</div>
      <div>{undefinedV}</div>

      {/* 배열 */}
      <div>{arr1}</div>

      {/* 객체 */}
      <div>{obj.name}</div>
      <div>{obj.age}</div>
    </>
  );
}

export default App;
