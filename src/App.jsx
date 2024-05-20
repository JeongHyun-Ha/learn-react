import React from "react";

function App(props) {
  function handleLinkClick(e) {
    e.preventDefault();
    console.log("a 태그 클릭");
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("폼 태그");
  }

  return (
    <div>
      <a href="https://www.google.com" onClick={handleLinkClick}>
        구글
      </a>
      <hr />
      <form action="https://www.google.com" onSubmit={handleSubmitForm}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
