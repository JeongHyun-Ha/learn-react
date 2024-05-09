function MyComp2() {
  // 최상위 컴포넌트를 사용하지 않을 때 -> fragment 사용 <></>
  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Accusantium enim, obcaecati.</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개임
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Consectetur, provident!</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄일 때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Architecto, voluptatem!</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>hello react</h1>
      <MyTag />
      <MyComp />
      <MyComp2 />
    </>
  );
}

export default App;
