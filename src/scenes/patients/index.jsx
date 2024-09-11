import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { tokens } from '../../theme'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Switch from '@mui/material/Switch'
import Header from '../../components/Header.jsx'
import { Table } from ' '

const Patients = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const handlePress = () => {
    console.log('PRESSED')
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
    }
  }));

  const dataSource = [
    {
      key: '1',
      name: 'PatientA1',
    },
  ]

  const columns = [
    {
      title: 'USERNAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'ALERT',
      key: 'alert',
      render: (text, record) => (
        <BlueSwitch defaultChecked size="small" />
      ),
    },
    {
      title: 'ACTION',
      key: 'action',
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
      <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="row">
        <Header title="PATIENTS" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
              marginRight: '10px'
            }}
          >
            <AddCircleOutlineOutlinedIcon sx={{ mr: '10px' }} />
            ONBOARD PATIENTS
          </Button>
        </Box>
      </Box>
      <Table dataSource={dataSource} columns={columns} />
    </Box>
  )
}

export default Patients
