import logo from "./logo.svg";

import "./App.css";
import Home from "./pages/Home/Home";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route";

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
