import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 , }}>
        <AppBar position="static" sx={{bgcolor: "#263238"}}>
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            iFamilyMart - 1
            </Typography>
            <Button color="inherit">Azad</Button>
          </Toolbar>
        </AppBar>
      </Box>
  
    );
};

export default Header;