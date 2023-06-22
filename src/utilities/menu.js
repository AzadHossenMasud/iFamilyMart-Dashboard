import React from "react";



export const menuItems = [
  {
    // icon: <HomeOutlinedIcon />,
    title: "Dashboard",
    items: [],
    to:'/'
  },
  {
    // icon: <LocalLibraryOutlinedIcon />,
    title: "Configurations",
    items: [
      {
        title: "Outet Info",
        items: [],
        to:'/configuration/outlet-info'
      },
      {
        title: "Brand & Group",
        items: [],
        to:'/configuration/brand&shop'
      },
      {
        title: "Model & Size",
        items: [],
        to:'/configuration/model&size'
      },
    ],
  },
  {
    // icon: <TrendingUpOutlinedIcon />,
    title: "Employees",
    items: [
      {
        title: "Employees Info",
        to: "/employees/employees-info",
      },
      {
        title: "Zone Info",
        to: "/employees/zone-info",
      },
      {
        title: "Employees Attendence",
        items: [
          {
            title: "Daily Attendence",
            to: "/employees/daily-attendence",
          },
          {
            title: "Manage Attendence",
            to: "/employees/manage-attendence",
          },
          {
            title: "Attendence Report",
            to: "/employees/attendence-report",
          },
        ],
      },
    ],
  },
  {
    // icon: <DescriptionOutlinedIcon />,
    title: "Suppliers",
    items:[]
  },
  {
    // icon: <DescriptionOutlinedIcon />,
    title: "Inventory",
    items:[]
  },
  {
    // icon: <DescriptionOutlinedIcon />,
    title: "Purchase",
    items:[]
  },
  {
    // icon: <DescriptionOutlinedIcon />,
    title: "Customers",
    items:[]
  },
  {
    // icon: <DescriptionOutlinedIcon />,
    title: "Sales",
    items:[]
  },
  {
    // icon: <DescriptionOutlinedIcon />,
    title: "Accounting",
    items:[]
  },
  {
    // icon: <DescriptionOutlinedIcon />,
    title: "More",
    items:[]
  },
];
