import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box sx={{backgroundColor: 'green', padding: 5, display: {xs: 'none', sm: 'block'}}} flex={2}>Rightbar</Box>
  )
}

export default Rightbar