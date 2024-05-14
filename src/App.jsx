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
    console.log("use effect 의 함수 실행됨");
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

  const [count, setCount] = useState(0);

  return (
    <div>
      hello comp
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
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
