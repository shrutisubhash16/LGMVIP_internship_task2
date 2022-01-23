import React, { useState } from "react";
import "./App.css";

const App = () => {
  //Use state is a statefull variable which can use a data
  const [users, setUser] = useState([]);
  const loadUsers = async () => {
    console.log("before");
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    console.log(jsonResponse.data);
    setUser(jsonResponse.data);
  };
  return (
    <div className="App">
      <h1>LGMVIP - TASK 2</h1>
      <h4>Users : </h4>
      <button onClick={loadUsers}>Get Data</button>

      <ul>
        {users.map(({ id, email, first_name,last_name,avatar }) => (
          <li key={id}>
            <div className="image"><img src={avatar}/></div>
            <h2>{first_name} {last_name}</h2>
            <h3>{email}</h3>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
