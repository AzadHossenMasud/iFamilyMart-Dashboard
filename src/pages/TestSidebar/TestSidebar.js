import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const TestSidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState([]);

  const handleSubMenuClick = (index) => {
    // setOpenSubMenu(index === openSubMenu ? null : index);
    setOpenSubMenu([index])
  };

  return (
    <List component="nav">
      <ListItemButton sx={{ pl: 4, }}>
        <Link style={{ textDecoration:"none"}} to='/configuration/outlet-info'><ListItemText  sx={{color:'white',}} primary='Dashborad' /></Link>
        
      </ListItemButton>
      <ListItem button onClick={() => handleSubMenuClick('Menu 1')}>
        <ListItemText primary="Menu 1" />
        {openSubMenu.includes('Menu 1') ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSubMenu.includes('Menu 1')} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Submenu 1-1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Submenu 1-2" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleSubMenuClick('Menu 2')}>
        <ListItemText primary="Menu 2" />
        {openSubMenu.includes('Menu 2') ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSubMenu.includes('Menu 2')} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Submenu 2-1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Submenu 2-2" />
          </ListItem>
        </List>
      </Collapse>
      {/* Add more menu items and submenus as needed */}
    </List>
  );
};

export default TestSidebar;
