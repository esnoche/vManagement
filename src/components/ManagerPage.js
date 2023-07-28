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


  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [allotedVehicle, setAllotedVehicle] = useState("");
  const [shift, setShift] = useState("");
  const [due, setDue] = useState("");


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


  const handleAddDriver = (e) => {
    e.preventDefault();
    if (!aadharNo || !contact) {
      setErrMsg("Please enter essential details properly");
      return;
    }

    axios.post("http://localhost:3001/adddriver", { name, address, contact, aadharNo, allotedVehicle, shift, due })
      .then(result => console.log(result))
      .catch(error => {
        if (error.response && error.response.data && error.response.data.error) {
          setErrMsg(error.response.data.error);
        } else {
          console.log(error);
        }
      });

    setName("");
    setAddress("");
    setContact("");
    setAadharNo("");
    setAllotedVehicle("");
    setShift("");
    setDue("");
  }

  useEffect(() => {
    axios.get('http://localhost:3001/showdrivers')
      .then((response) => {
        setDriverData(response.data);
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
                  <tr key={row.regNo}>
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
                  <tr key={row.aadharNo}>
                    <td>{row.name}</td>
                    <td>{row.address}</td>
                    <td>{row.contact}</td>
                    <td>{row.aadharNo}</td>
                    <td>{row.allotedVehicle}</td>
                    <td>{row.shift}</td>
                    <td>{row.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='form-container'>

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
          <form onSubmit={handleAddDriver}>
            {errMsg && <p>{errMsg}</p>}
            <label>Name:</label>
            <div>
              <input
                type='text'
                placeholder='Enter driver name'
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
              />
            </div>
            <label>Address:</label>
            <div>
              <input
                type='text'
                placeholder='Enter address'
                value={address}
                onChange={(e) => setAddress(e.target.value.toUpperCase())}
              />
            </div>
            <label>Contact Number:</label>
            <div>
              <input
                type='number'
                placeholder='Enter contact number'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <label>Aadhar Number:</label>
            <div>
              <input
                type='number'
                placeholder='Enter Aadhar number'
                value={aadharNo}
                onChange={(e) => setAadharNo(e.target.value)}
              />
            </div>
            <label>Alloted Vehicle:</label>
            <div>
              <input
                type='text'
                placeholder='Enter vehicle registration number'
                value={allotedVehicle}
                onChange={(e) => setAllotedVehicle(e.target.value.toUpperCase())}
              />
            </div>
            <label>Charge per Shift:</label>
            <div>
              <input
                type='number'
                placeholder='Enter charge per shift'
                value={shift}
                onChange={(e) => setShift(e.target.value)}
              />
            </div>
            <label>Due Amount:</label>
            <div>
              <input
                type='number'
                placeholder='Enter due amount'
                value={due}
                onChange={(e) => setDue(e.target.value)}
              />
            </div>
            <button type='submit'>Add</button>
          </form>
        </div>
        
      </div>
    </div>
  );
};
