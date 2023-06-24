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
          {
              id: 2,
              title: "Product Info",
              to: "/inventory/product-info",
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