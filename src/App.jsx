import React, { useState } from "react";

function App(props) {
  const [numList, setNumList] = useState([]);
  const [text, setText] = useState("");

  function handleAddList() {
    numList.push(text);
    const [...newList] = numList;
    setNumList(newList);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddList}>추가</button>
      <ul>
        {numList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
