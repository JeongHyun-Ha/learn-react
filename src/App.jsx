import React, { createContext, useContext, useState } from "react";

// step1 : create the context
const MessageContext = createContext("");

function MyBox() {
  // step2 : use context
  const message = useContext(MessageContext);
  return <div>{message}</div>;
}

function MySection() {
  return <MyBox />;
}

function MyContainer() {
  return <MySection />;
}

// context
function App(props) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <hr />
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
