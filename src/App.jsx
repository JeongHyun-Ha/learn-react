import React, { useEffect, useState } from "react";

function MyComp() {
  // useEffect : 특정 수낙ㄴ에 실행되는 메소드를 파라미터로 받음
  // 특정 순간 : 예) initial render(mount), re-render,
  //               컴포넌트가 트리에서 떨어질 때(unmount), 어떤 state가 바뀔 때

  // 첫번째 파라미터 : 실행되는 메소드
  // 두번째 파라미터 : dependency

  // 두번째 파라미터가 없을 때
  // rendering 될 때마다 실행
  useEffect(() => {
    console.log("rendering될 때 마다 실행");
  });

  // 두번째 파라미터에 빈 배열을 넣으면
  // initial rendering 때만 실행
  useEffect(() => {
    console.log("첫 랜더링 때만 실행되는 메소드");
  }, []);

  // 첫번째 파라미터(함수)의 리턴은
  // unmount 될 때 실행
  useEffect(() => {
    return () => console.log("unmount 때만 실행되는 메소드");
  }, []);

  // 두번째 파라미터(배열)의 원소
  // 어떤 값(주로 state, dependency)이 바뀔 때
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  useEffect(() => {
    console.log("text1: dependency가 바뀔 때");
  }, [text1]);
  useEffect(() => {
    console.log("text2: dependency가 바뀔 때");
  }, [text2]);
  useEffect(() => {
    console.log("text1 또는 text2가 바뀔 때");
  }, [text1, text2]);

  const [count, setCount] = useState(0);

  return (
    <div>
      hello comp
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
      <div>
        <input type="text" onChange={(e) => setText1(e.target.value)} />
        <input type="text" onChange={(e) => setText2(e.target.value)} />
      </div>
    </div>
  );
}

function App(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      {show && <MyComp />}
    </div>
  );
}

export default App;
