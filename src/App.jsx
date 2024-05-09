// built-in component : html 의 기본 요소, 소문자로 시작
// component : 직접 만든 요소(태그), 대문자로 시작

// component 는 return 을 가진 함수

function MyComponent() {
  // return : 화면에 출력할 코드
  return <div>Hello MyComponent</div>;
}

function MyComp() {
  // JSX 코드 : <div></div>
  const myElem = <h1>hi JSX</h1>;
  return myElem;
}

function App() {
  // 한 줄 주석
  /*
   여러 줄 주석
  */
  /**
   *
   */
  // component 사용시 종료 태그 생략할 수 없음
  // br 같은 빈요소는 시작태그에서 꼭 종료
  return (
    <>
      <div>
        {/* jsx 내에서의 주석 */}
        {/* 단축키 : ctrl + / */}
        <h1>Hello React</h1>
        <hr />
        <h2>하이 리엑트</h2>
        <p>Lorem ipsum dolor.</p>
      </div>
      <MyComponent />
      <MyComp />
    </>
  );
}

export default App;
