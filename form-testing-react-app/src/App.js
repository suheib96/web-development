import "./App.css";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function onUserAdd(user) {
    setUsers([...users,user]);
  }

  return (
    <>
      <UserForm onUserAdd={onUserAdd}></UserForm>
      <hr></hr>
      <UserList users={users}></UserList>
    </>
  );
}

export default App;
