import { Box, useTheme } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { tokens } from '../../theme'
import Data from '../../data.json'

const Dashboard = () => {
  const theme = useTheme()
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/sensor')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  })

  return (
    <Box m="20px">
      {/* HEADER */}
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Mac ID</th>
            <th>Availability</th>
            <th>Status</th>
            <th>Organisation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.pid}</td>
              <td>{d.name}</td>
              <td>{d.type}</td>
              <td>{d.macId}</td>
              <td>{d.availability}</td>
              <td>{d.status}</td>
              <td>{d.organisation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}

export default Dashboard
