function App() {
  // falsy, truthy
  // falsy(false 같은)
  //  : false, 0, "", null, undefined

  const a = 0;
  if (a) {
    console.log("a는 참이다.");
  } else {
    console.log("a는 거짓이다");
  }
  const b = 1;
  let c = b && "값이 있음";
  let d = b && "값이 없음";
  console.log("c", c);
  console.log("d", d);

  return <div></div>;
}

export default App;
