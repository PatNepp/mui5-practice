import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography, Menu, MenuItem } from '@mui/material'
import {PsychologyAlt, Mail, Notifications} from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))
const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
}))
const UserBox = styled(Box)(({theme}) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]:{
    display:'flex'
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>PATA DEV</Typography>
        <PsychologyAlt sx={{display: {sx: 'block', sm: 'none'}}} />
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width: 30, height: 30}} src='https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80' onClick={() => setOpen(true)}/>
        </Icons>
        <UserBox>
          <Avatar sx={{width: 30, height: 30}} src='https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80' onClick={() => setOpen(true)}/>
          <Typography variant='span'>Patrick</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar