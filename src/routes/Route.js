import { createBrowserRouter } from "react-router-dom";
import OutletInfo from "../pages/Configurations/OutletInfo";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import BrandsAndGrop from "../pages/Configurations/BrandsAndGrop/BrandsAndGrop";
import AddProduct from "../pages/Inventory/AddProduct/AddProduct";
import ProductInfo from "../pages/Inventory/ProductInfo/ProductInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/configuration/outlet-info",
        element: <OutletInfo></OutletInfo>,
      },
      {
        path: "/configuration/brand&group",
        element: <BrandsAndGrop></BrandsAndGrop>,
      },
      {
        path: "/inventory/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/inventory/product-info",
        element: <ProductInfo></ProductInfo>,
      },
    ],
  },
]);
