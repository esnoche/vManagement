import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import "./AdminPage.css"
export default function ManagerPage() {

  const [vehicleData, setVehicleData] = useState([]);
  const [driverData, setDriverData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isOn, setIsOn] = useState(false);

  
  const [regNo, setRegNo] = useState("");
  const [engNo, setEngNo] = useState("");
  const [shiftCharge, setShiftCharge] = useState(0);
  const [agent, setAgent] = useState("");
  const [driver, setDriver] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleAddVehicle = (e) => {
    e.preventDefault();
    if (!regNo || !engNo || !shiftCharge) {
      setErrMsg("Please enter essential details properly");
      return;
    }

    axios.post("http://localhost:3001/addvehicle", { regNo, engNo, shiftCharge, agent, driver })
      .then(result => console.log(result))
      .catch(error => {
        if (error.response && error.response.data && error.response.data.error) {
          setErrMsg(error.response.data.error);
        } else {
          console.log(error);
        }
      });
    setRegNo("");
    setEngNo("");
    setShiftCharge(0);
    setAgent("");
    setDriver("");
  }

  useEffect(() => {
    axios.get('http://localhost:3001/showvehicles')
      .then((response) => {
        setVehicleData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrMsg('Error fetching data from the server.');
      });
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
                  <tr key={row.id}>
                    <td>{row.regNo}</td>
                    <td>{row.engNo}</td>
                    <td>{row.shiftCharge}</td>
                    <td>{row.agent}</td>
                    <td>{row.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />

      {/* <div className={`dropdown ${isOn ? 'active' : ''}`}>
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
      </div> */}

      <br />

      <div className='add-vehicle-form'>
        <h3>Add Vehicles</h3>
        <form onSubmit={handleAddVehicle}>
          {errMsg && <p>{errMsg}</p>}
          <label>Reg No.:</label>
          <div>
            <input
              type='text'
              placeholder='Enter your vehicle reg number'
              value={regNo}
              onChange={(e) => setRegNo(e.target.value.toUpperCase())}
            />
          </div>
          <label>Eng No.:</label>
          <div>
            <input
              type='text'
              placeholder='Enter engine number'
              value={engNo}
              onChange={(e) => setEngNo(e.target.value.toUpperCase())}
            />
          </div>
          <label>Shift Charge:</label>
          <div>
            <input
              type='number'
              placeholder='Enter vehicle shift charge'
              value={shiftCharge}
              onChange={(e) => setShiftCharge(e.target.value)}
            />
          </div>
          <label>Agent:</label>
          <div>
            <input
              type='text'
              placeholder='Enter agent name'
              value={agent}
              onChange={(e) => setAgent(e.target.value.toUpperCase())}
            />
          </div>
          <label>Driver:</label>
          <div>
            <input
              type='text'
              placeholder='Enter driver name'
              value={driver}
              onChange={(e) => setDriver(e.target.value.toUpperCase())}
            />
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>

      <div className='add-driver-form'>
        <h3>Add Drivers</h3>
        <form onSubmit={handleAddVehicle}>
          {errMsg && <p>{errMsg}</p>}
          <label>Reg No.:</label>
          <div>
            <input
              type='text'
              placeholder='Enter your vehicle reg number'
              value={regNo}
              onChange={(e) => setRegNo(e.target.value.toUpperCase())}
            />
          </div>
          <label>Eng No.:</label>
          <div>
            <input
              type='text'
              placeholder='Enter engine number'
              value={engNo}
              onChange={(e) => setEngNo(e.target.value.toUpperCase())}
            />
          </div>
          <label>Shift Charge:</label>
          <div>
            <input
              type='number'
              placeholder='Enter vehicle shift charge'
              value={shiftCharge}
              onChange={(e) => setShiftCharge(e.target.value)}
            />
          </div>
          <label>Agent:</label>
          <div>
            <input
              type='text'
              placeholder='Enter agent name'
              value={agent}
              onChange={(e) => setAgent(e.target.value.toUpperCase())}
            />
          </div>
          <label>Driver:</label>
          <div>
            <input
              type='text'
              placeholder='Enter driver name'
              value={driver}
              onChange={(e) => setDriver(e.target.value.toUpperCase())}
            />
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>


    </div>
  );
};
