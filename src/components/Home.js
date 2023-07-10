import React from 'react'
import { Link } from 'react-router-dom'
// import AdminLogin from './AdminLogin'

export default function Home() {
  return (
    <div>
        <Link to="/adminlogin"><button>Admin</button></Link>
        <br/>
        <Link to="/managerlogin"><button>Manager</button></Link>
        <Link to="/agentlogin"><button>Agent</button></Link> 
    </div>
  )
}
