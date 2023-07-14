import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AgentLogin from './components/AgentLogin'
import ManagerLogin from './components/ManagerLogin'
import AdminLogin from './components/AdminLogin'
import AdminPage from './components/AdminPage'
import ManagerPage from './components/ManagerPage'
import AgentPage from './components/AgentPage'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/managerlogin" element={<ManagerLogin />} />
        <Route path="/agentlogin" element={<AgentLogin />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/managerpage" element={<ManagerPage />} />
        <Route path="/agentpage" element={<AgentPage />} />
      </Routes>
    </Router>
  )
}
