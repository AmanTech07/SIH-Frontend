import { AppBar, Toolbar, IconButton, Typography, Button, Badge } from '@mui/material'
import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';


const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', width: "100%"}} component='div'>
          <Box>
            <IconButton ><MenuOutlinedIcon /></IconButton>
          </Box>
          <Box sx={{ display: "flex" }}>
          <IconButton ><Typography sx={{ marginRight: '20px', cursor: 'pointer', color: 'white' }}>Home</Typography></IconButton>
          <IconButton ><Typography sx={{ marginRight: '20px', cursor: 'pointer', color: 'white' }}>About Us</Typography></IconButton>
          <IconButton ><Typography sx={{ marginRight: '20px', cursor: 'pointer', color: 'white' }}>Employability Stats</Typography></IconButton>
          <IconButton ><Typography sx={{ marginRight: '20px', cursor: 'pointer', color: 'white' }}>Services</Typography></IconButton>
          <IconButton ><Typography sx={{ marginRight: '20px', cursor: 'pointer', color: 'white' }}>Media</Typography></IconButton>
          <IconButton ><Typography sx={{ marginRight: '20px', cursor: 'pointer', color: 'white' }}>FAQ</Typography></IconButton>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button variant='contained' color='secondary'>Login</Button>
            <IconButton><Badge badgeContent={0} color="secondary">
              <AccountCircleIcon color="action" />
            </Badge></IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
    //  <Box component='div'>
    //    <MenuIcon />
    //  </Box>
  );
};

export default Navbar