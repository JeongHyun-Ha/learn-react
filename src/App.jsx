import React from "react";

function App(props) {
  function handleLinkClick() {}

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("다른 동작하는 코드 작성");
  }

  return (
    <div>
      <a href="https://www.naver.com" onClick={handleLinkClick}>
        네이버
      </a>
      <hr />
      <form action="https://www.naver.com">
        <input type="text" onSubmit={handleSubmitForm} />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
