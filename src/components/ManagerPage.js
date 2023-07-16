import React from 'react'
import { useState } from 'react';
import "./AdminPage.css"
export default function ManagerPage() {
  
  const tableData = [
    { id: 1, name1: "abcd", age: 19, rn: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19 },
    { id: 1, name1: "abc", age: 19, rn: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19 },
    { id: 1, name1: "abc", age: 19, rn: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19 },
    { id: 1, name1: "abc", age: 19, rn: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19 },
    { id: 1, name1: "abc", age: 19, rn: 5, name: "abc", age: 19,id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19 },
    { id: 1, name1: "abc", age: 19, rn: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19 },
    { id: 1, name1: "abc", age: 19, rn: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19 },
    { id: 1, name1: "abc", age: 19, rn: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19 },
    { id: 1, name1: "abc", age: 19, rn: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19, id: 1, name: "abc", age: 19,id: 1, name: "abc", age: 19 },
  ];

  const [isActive, setIsActive] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const toggleDrivers = () => {
    setIsOn(!isOn);
  }
  return (
    <div className='manager-page'>
      <h2>Dashboard</h2>

      <div className={`dropdown ${isActive ? 'active' : ''}`}>
        <button className='dropbtn' onClick={toggleDropdown}>Vehicles</button>
        <div className='dropdown-content'>
          <div className='scrollable-table'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>rn</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name1}</td>
                    <td>{row.age}</td>
                    <td>{row.rn}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />

      <div className={`dropdown ${isOn ? 'active' : ''}`}>
        <button className='dropbtn' onClick={toggleDrivers}>Drivers</button>
        <div className='dropdown-content'>
          <div className='scrollable-table'>
            <table>
              <thead>
                <tr>
                <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};
