import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    const menuItems = [
        {
            id: 1,
            title: "Dashboard",
            subMenuItems: [],
            to: '/'
        },
        {
            id: 2,
            title: "Configurations",
            subMenuItems: [
                {
                    id: 1,
                    title: "Outlet Info",
                    subMenuItems: [],
                    to: '/configuration/outlet-info'
                },
                {
                    id: 2,
                    title: "Brand & Group",
                    subMenuItems: [],
                    to: '/configuration/brand&group'
                },
                {
                    id: 3,
                    title: "Model & Size",
                    subMenuItems: [],
                    to: '/configuration/model&size'
                },
            ],
        },
        {
            id: 3,
            title: "Employees",
            subMenuItems: [
                {
                    id: 1,
                    title: "Employees Info",
                    to: "/employees/employees-info",
                },
                {
                    id: 2,
                    title: "Zone Info",
                    to: "/employees/zone-info",
                },
                {
                    id: 3,
                    title: "Employees Attendence",
                    to: "/employees/employees-attendence",


                },
            ],
        },
        {
            id: 4,
            title: "Suppliers",
            subMenuItems: []
        },
        {
            id: 5,
            title: "Inventory",
            subMenuItems: [
                {
                    id: 1,
                    title: "Add Product",
                    to: "/inventory/add-product",
                },
            ]
        },
        {
            id: 6,
            title: "Purchase",
            subMenuItems: []
        },
        {
            id: 7,
            title: "Customers",
            subMenuItems: []
        },
        {
            id: 8,
            title: "Sales",
            subMenuItems: []
        },
        {
            id: 9,
            title: "Accounting",
            subMenuItems: []
        },
        {
            id: 10,
            title: "More",
            subMenuItems: []
        },
    ];


    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleSubMenuClick = (index) => {
        setOpenSubMenu(index === openSubMenu ? null : index);
    };

    return (
        <List
            sx={{ width: "100%", height: "100vh", maxWidth: 360, bgcolor: "#455a64", color: "white", }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {menuItems.map((menuItem, index) => (
                menuItem?.subMenuItems.length > 0 ?
                    <>
                        <ListItemButton key={menuItem?.id} onClick={() => handleSubMenuClick(index)} sx={{ pl: 4, }}>
                            <Link style={{ textDecoration: "none" }} to='/configuration/outlet-info'>
                                <ListItemText sx={{ color: 'white', }} primary={menuItem.title} /></Link>
                            {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}

                        </ListItemButton>
                        {menuItem.subMenuItems.length > 0 && (
                            <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
                                <List sx={{ pl: 4, }} component="div" disablePadding>
                                    {menuItem.subMenuItems.map((subMenuItem) => (
                                        <ListItemButton key={subMenuItem?.id} sx={{ pl: 4, }}>
                                            <Link style={{ textDecoration: "none" }} to={subMenuItem?.to}>
                                                <ListItemText sx={{ color: 'white', }} primary={subMenuItem.title} /></Link>

                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </> :
                    <ListItemButton key={menuItem?.id} onClick={() => handleSubMenuClick(index)} sx={{ pl: 4, }}>
                        <Link style={{ textDecoration: "none" }} to='/'>
                            <ListItemText sx={{ color: 'white', }} primary={menuItem.title} />
                        </Link>
                    </ListItemButton>
            ))}
        </List>
        // <List component="nav">
        //   {menuItems.map((menuItem, index) => (
        //     <React.Fragment key={menuItem.id}>
        //       <ListItem button onClick={() => handleSubMenuClick(index)}>
        //         <ListItemText primary={menuItem.title} />
        //         {openSubMenu === index && menuItem.subMenuItems.length > 0 ? <ExpandLess /> : <ExpandMore />}
        //       </ListItem>
        //       {menuItem.subMenuItems.length > 0 && (
        //         <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
        //           <List component="div" disablePadding>
        //             {menuItem.subMenuItems.map((subMenuItem) => (
        //               <ListItem button key={subMenuItem.id}>
        //                 <ListItemText primary={subMenuItem.title} />
        //               </ListItem>
        //             ))}
        //           </List>
        //         </Collapse>
        //       )}
        //     </React.Fragment>
        //   ))}
        // </List>
    );
};

export default SideMenu;
