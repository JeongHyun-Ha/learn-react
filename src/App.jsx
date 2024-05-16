import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [code, setCode] = useState(200);
  function handle200() {
    axios.get("/api/main43/sub1").then((res) => console.log(res));
  }

  function handleCode() {
    axios
      .get(`/api/main43/sub3?code=${code}`)
      .then((res) => console.log("200번대 응답")) // 200번대 오류코드 응답
      .catch((err) => {
        // 200번대 외의 오류 코드 응답
        if (err.response.status === 401) {
          console.log("401번 오류 코드");
        } else if (err.response.status === 403) {
          console.log("403번 오류 코드");
        } else {
          console.log("그 외 오류 코드");
        }
      })
      .finally(() => console.log("항상 실행")); // 항상 실행
  }

  return (
    <div>
      <button onClick={handle200}>200 응답</button>
      <hr />
      <input type="number" onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleCode}>응답 코드에 따라 다른 일하기</button>
    </div>
  );
}

export default App;
