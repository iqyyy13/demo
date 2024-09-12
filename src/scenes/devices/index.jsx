import { useState } from 'react'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import Header from '../../components/Header'
import { Table, Tag, Row, Col, Space, Form } from 'antd'
import { Box, Typography, useTheme, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import AddSensor from '../../components/AddSensor'

const Devices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isAddSensor, setIsAddSensor] = useState(false)
  const handlePress = () => {
    console.log('PRESSED')
  }
  const handleFormPress = () => {
    console.log('opening up form')
  }
  const columns = [
    {
      dataIndex: 'name',
      title: 'SENSOR NAME',
      width: '20%',
    },
    {
      dataIndex: 'organisation',
      title: 'ORGANISATION',
      width: '10%',
    },
    {
      dataIndex: 'type',
      title: 'SENSOR TYPE',
      width: '10%',
    },
    {
      dataIndex: 'macId',
      title: 'MAC ID',
      width: '10%',
    },
    {
      dataIndex: 'availability',
      title: 'AVAILABILITY',
      key: 'availability',
      width: '10%',
      render: (text) => {
        const color = text === 'AVAILABLE' ? '#87d068' : '#FFA500'
        return (
          <Tag color={color} style={{ borderRadius: '10px' }}>
            {text.toUpperCase()}
          </Tag>
        )
      },
    },
    {
      dataIndex: 'status',
      title: 'STATUS',
      key: 'status',
      width: '2%',
      render: (text) => {
        const color = text === 'ONLINE' ? '#87d068' : '#f50'
        return (
          <Tag color={color} style={{ borderRadius: '10px' }}>
            {text.toUpperCase()}
          </Tag>
        )
      },
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: '10%',
      render: (text, record) => (
        <Row justify="center">
          <Col>
            <Space size="small">
              <Button onClick={() => handlePress()}>
                <SettingsOutlinedIcon htmlColor="blue" />
              </Button>
              <Button onClick={() => handlePress()}>
                <DeleteOutlineOutlinedIcon htmlColor="red" />
              </Button>
            </Space>
          </Col>
        </Row>
      ),
    },
  ]

  return (
    <>
      <Box
        m="20px"
        backgroundColor="white"
        borderRadius="10px"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <Header title="SENSOR MANAGEMENT" />
          <Box>
            <Button
              onClick={() => {
                setIsAddSensor(true);
              }}
              sx={{
                backgroundColor: colors.greenAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '10px 20px',
                marginRight: '20px',
              }}
            >
              <AddCircleOutlineOutlinedIcon sx={{ mr: '10px' }} />
              ADD SENSOR
            </Button>
          </Box>
        </Box>
        <Box
          m="20px 0 0 0"
          height="79vh"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .ant-table-cell': {
              borderBottom: 'none',
              alignContent: 'center',
            },
            '& .name-column--cell': {
              color: colors.grey[100],
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: colors.blueAccent[800],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[800],
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
            '& .MuiBox-root': {
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <Table dataSource={mockDataTeam} columns={columns} />
        </Box>
      </Box>

      <AddSensor modalState={isAddSensor} setModalState={setIsAddSensor} />
    </>
  )
}

export default Devices
