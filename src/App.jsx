import React, { useState } from "react";

function App(props) {
  const [person, setPerson] = useState({
    name: "",
    address: "",
    city: "",
    email: "",
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={"이름"}
          onChange={(event) => {
            const { ...newPerson } = person;
            newPerson.name = event.target.value;
            setPerson(newPerson);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"이메일"}
          onChange={(event) => {
            const { ...newPerson } = person;
            newPerson.email = event.target.value;
            setPerson(newPerson);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"도시"}
          onChange={(event) => {
            const newPerson = { ...person, city: event.target.value };
            setPerson(newPerson);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"주소"}
          onChange={(event) => {
            const newPerson = { ...person, address: event.target.value };
            setPerson(newPerson);
          }}
        />
      </div>
      <ul>
        <li>name: {person.name}</li>
        <li>email: {person.email}</li>
        <li>city: {person.city}</li>
        <li>address: {person.address}</li>
      </ul>
    </div>
  );
}

export default App;
