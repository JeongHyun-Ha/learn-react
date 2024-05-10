import React from "react";

function MyComp({ name, age, someProp, otherProp }) {
  console.log("someProp", someProp); // true
  console.log("otherProp", otherProp); // undefined
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComp name="son" age={30} someProp={true} />
    </div>
  );
}

export default App;
