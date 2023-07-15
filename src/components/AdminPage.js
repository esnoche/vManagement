/*
import React from 'react';
const AdminPage = () => {
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Agent' },
  ];
  return (
    <div className="admin-page">
      <h2>Admin Page</h2>
      <div className="dropdown">
        <button className="dropbtn">Vehicles</button>
        <div className="dropdown-content">
          <div className="scrollable-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.role}</td>
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
*/
import React from 'react'
import { useState } from 'react';
import "./AdminPage.css"
export default function AdminPage() {
  
  const tableData = [
    { id: 1, name: "abc", age: 19 },
    { id: 2, name: "efg", age: 19 }
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
    <div className='admin-page'>
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
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
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
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
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
