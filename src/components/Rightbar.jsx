import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box sx={{ display: {xs: 'none', sm: 'block'}}} flex={2} p={2}>
      <Box position='fixed'>
        hey bitches
      </Box>
    </Box>
  )
}

export default Rightbar