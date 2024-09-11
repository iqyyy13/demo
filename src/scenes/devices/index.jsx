import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import Header from '../../components/Header'
import { Padding } from '@mui/icons-material'

const Devices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    {
      field: 'name',
      headerName: 'SENSOR NAME',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'type',
      headerName: 'SENSOR TYPE',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'macId',
      headerName: 'MAC ID',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'availability',
      headerName: 'AVAILABILITY',
      flex: 1,
      renderCell: ({ row: { availability } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            height="60%"
            display="flex"
            backgroundColor={
              availability === 'AVAILABLE'
                ? colors.greenAccent[600]
                : availability === 'ALLOCATED'
                ? colors.redAccent[600]
                : colors.redAccent[600]
            }
            borderRadius="10px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {availability}
            </Typography>
          </Box>
        )
      },
    },
    {
      field: 'status',
      headerName: 'STATUS',
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="40%"
            m="0 auto"
            height="60%"
            display="flex"
            backgroundColor={
              status === 'ONLINE'
                ? colors.greenAccent[600]
                : status === 'OFFLINE'
                ? colors.redAccent[600]
                : colors.redAccent[600]
            }
            borderRadius="10px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {status}
            </Typography>
          </Box>
        )
      },
    },
  ]

  return (
    <Box m="20px">
      <Header title="SENSOR MANAGEMENT" />
      <Box
        m="20px 0 0 0"
        height="77vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
            alignContent: 'center'
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
            alignItems:"center",
            justifyContent: 'center',
          }
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  )
}

export default Devices
