import React, { useEffect } from 'react'
import { useState } from 'react';
import "./AdminPage.css"
export default function ManagerPage() {

  const [vehicleData, setVehicleData] = useState([]);
  const [driverData, setDriverData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    fetch("/api/vehicleData")
      .then((response) => response.json())
      .then((data) => setVehicleData(data))
      .catch((error) => console.error("Error fetching vehicle data", error))
  }, []);

  useEffect(() => {
    fetch("/api/driverData")
      .then((response) => response.json())
      .then((data) => setDriverData(data))
      .catch((error) => console.error("Error fetching vehicle data", error))
  }, []);

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
                  <th>Reg No.</th>
                  <th>Engine No.</th>
                  <th>Charge (per shift)</th>
                  <th>Agent in charge</th>
                  <th>Driver</th>
                </tr>
              </thead>
              <tbody>
                {vehicleData.map((row) => (
                  <tr key={row["Reg No."]}>
                    <td>{row["Reg No."]}</td>
                    <td>{row["Engine No."]}</td>
                    <td>{row["Charge (per shift)"]}</td>
                    <td>{row["Agent in charge"]}</td>
                    <td>{row["Driver"]}</td>
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
                  <th>Name</th>
                  <th>Addres</th>
                  <th>Contact</th>
                  <th>Aadhar</th>
                  <th>Vehicle</th>
                  <th>Charge (per shift)</th>
                  <th>Due</th>
                </tr>
              </thead>
              <tbody>
                {driverData.map((row, index) => (
                  <tr key={row.index}>
                    <td>{row.Name}</td>
                    <td>{row.Address}</td>
                    <td>{row.Contact}</td>
                    <td>{row.Aadhar}</td>
                    <td>{row.Vehicle}</td>
                    <td>{row["Charge (per shift)"]}</td>
                    <td>{row.Due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br/>

      

    </div>
  );
};
