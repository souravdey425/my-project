import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [enterData, setEnterData] = useState([]);
  const changeEnterData = (tData, aData) => {
    setEnterData((prevState) => {
      return [
        ...prevState,
        { Name: tData, Age: aData, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={changeEnterData} />
      <UserList users={enterData} />
    </div>
  );
}

export default App;
