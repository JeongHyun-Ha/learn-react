import React, { createContext, useContext, useState } from "react";

let TextContext = createContext(null);

function MyInput() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <input type="text" onChange={textHandler.setText} />
      <p>MyInput : {textHandler.text}</p>
    </div>
  );
}

function MyText() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <p>MyText : {textHandler.text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <TextContext.Provider value={{ text, setText: handleUpdateText }}>
        <MyInput />
        <MyText />
      </TextContext.Provider>
    </div>
  );
}

export default App;
