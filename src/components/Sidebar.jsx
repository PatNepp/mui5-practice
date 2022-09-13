import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box sx={{ backgroundColor: 'purple', padding: 5, display: {xs: 'none', sm: 'block'} }} flex={1}>Sidebar</Box>
  )
}

export default Sidebar