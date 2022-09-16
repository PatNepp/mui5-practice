import { Box } from '@mui/material'

import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box p={5} flex={4} >
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed