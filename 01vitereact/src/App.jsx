import React, { useState } from "react";
import "./App.css";
import { Table } from "react-bootstrap";

function App() {
  const users = [
    { name: "Anil", email: "anil@test.com", contact: "111" },
    { name: "Burce", email: "bruce@test.com", contact: "222" },
    { name: "Peter", email: "peter@test.com", contact: "111" },
    { name: "Sam", email: "sam@test.com", contact: "777" },
  ];
  return (
    <div className="App">
      <h1>List with bootstrap</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
          {users.map((item, i) => (
            item.contact === '111'?
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              </tr>
              :null
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default App;
