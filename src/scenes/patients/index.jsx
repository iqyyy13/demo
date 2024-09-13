import {
  Box,
  Button,
  useTheme,
} from '@mui/material'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { tokens } from '../../theme'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Switch from '@mui/material/Switch'
import Header from '../../components/Header.jsx'
import { Table } from 'antd'
import axios from 'axios'

import AddPatients from '../../components/AddPatients.jsx'
import PatientManagement from '../../components/PatientManagementModal.jsx'

const Patients = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isAddPatient, setIsAddPatient] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handlePress = () => {
    console.log('PRESSED')
    setShowModal(true)
  }

  const BlueSwitch = styled(Switch)(() => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: colors.blueAccent[500],
      '& + .MuiSwitch-track': {
        backgroundColor: colors.blueAccent[500],
      },
    },
    '& .MuiSwitch-switchBase': {
      color: colors.grey[500],
    },
    '& .MuiSwitch-track': {
      backgroundColor: colors.grey[800],
    },
  }))

  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/patients')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  })
  
  // console.log("data:", data)

  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'PatientA1',
  //     pid: '1'
  //   },
  //   {
  //     key: '2',
  //     name: 'PatientA2',
  //     pid: '2',
  //   },
  //   {
  //     key: '3',
  //     name: 'PatientA3',
  //     pid: '3',
  //   },
  //   {
  //     key: '4',
  //     name: 'PatientA4',
  //     pid: '4',
  //   },
  //   {
  //     key: '5',
  //     name: 'PatientA5',
  //     pid: '5',
  //   },
  //   {
  //     key: '6',
  //     name: 'PatientA6',      
  //     pid: '6',
  //   },
  //   {
  //     key: '7',
  //     name: 'PatientA7',
  //     pid: '7',
  //   },
  //   {
  //     key: '8',
  //     name: 'PatientA8',
  //     pid: '8',
  //   },
  // ]



  const columns = [
    {
      title: 'USERNAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'PATIENT ID',
      dataIndex: 'pid',
      key: 'pid',
      width: '10%',
    },
    {
      title: 'ALERT',
      key: 'alert',
      width: '10%',
      render: (text, record) => <BlueSwitch defaultChecked size="small" />,
    },
    {
      title: 'ACTION',
      key: 'action',
      width: '10%',
      render: (text, record) => (
        <Button onClick={() => handlePress()}>
          <SettingsOutlinedIcon sx={{ mr: '10px' }} />
        </Button>
      ),
    },
  ]

  return (
    <Box m="20px" borderRadius="10px" backgroundColor="white">
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Header title="PATIENTS" />
        <Box>
          <Button
            onClick={() => {
              setIsAddPatient(true)
            }}
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
              marginRight: '10px',
            }}
          >
            <AddCircleOutlineOutlinedIcon sx={{ mr: '10px' }} />
            ONBOARD PATIENTS
          </Button>
        </Box>
      </Box>
      <Table dataSource={data} columns={columns} />

      <AddPatients modalState={isAddPatient} setModalState={setIsAddPatient} />
      <PatientManagement modalState={showModal} setModalState={setShowModal} />
    </Box>
  )
}

export default Patients
