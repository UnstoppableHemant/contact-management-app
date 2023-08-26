import React from 'react'
import LineGraph from '../components/dashboard/lineGraph'
import Map from '../components/dashboard/map'

const Dashboard = () => {
  return (
    <div>
      <Map />
      <LineGraph />
    </div>
  )
}

export default Dashboard