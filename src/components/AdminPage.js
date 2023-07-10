import React from 'react'
import DropdownWindow from './DropdownWindow'
import DummyData from './DummyData'

export default function AdminPage() {
  return (
    <div>
        <h2>Dashboard</h2>
        <DropdownWindow title='Vehicles' data={DummyData}/>
    </div>
  )
}
